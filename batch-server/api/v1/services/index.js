// CUSTOM API
const {
  getBlockByNumber,
  getTransactionReceipt,
  getUncleByBlockHashAndIndex,
} = require('external/infura');

// helper
const { intToHex, hexToInt } = require('helper/translate');

// Query
const { selectTxOfHash, updateTx } = require('DB/query/txs');
const { selectBlockOfNumber, updateBlock } = require('DB/query/blocks');

const getUnclesReward = async (block, uncles) => {
  const { hash, number } = block;

  if (uncles.length) {
    let unclesReward = 0;

    for (let index = 0; index < uncles.length; index++) {
      const data = await getUncleByBlockHashAndIndex(hash, intToHex(index));
      const { result } = data;
      const uncleNumber = result['number'];

      // 엉클 리워드 구하기 (공식)
      unclesReward += ((hexToInt(uncleNumber) + 8 - hexToInt(number)) * 2) / 8;
    }

    return unclesReward.toString();
  }

  return '0x0';
};

const blockParse = async blockData => {
  const { result } = blockData;
  const { transactions, uncles } = result;

  const block = {};
  Object.keys(result).forEach(key => {
    //   logsBloom, mixHash, stateRoot, receiptsRoot 는 데이터 베이스에 사용되지 않음.
    if (
      key === 'logsBloom' ||
      key === 'mixHash' ||
      key === 'stateRoot' ||
      key === 'receiptsRoot' ||
      key === 'transactionsRoot' ||
      key === 'transactions' ||
      key === 'uncles'
    ) {
      return;
    }

    block[key.toLowerCase()] = result[key];
  });

  let unclesLength = uncles.length;
  if (uncles.length >= 2) unclesLength = 2;

  block['txcount'] = transactions.length;
  block['uncles'] = unclesLength;
  const unclesReward = await getUnclesReward(block, uncles);
  // block reward 추가
  block['unclesreward'] = unclesReward;

  return { block, transactions };
};

const txsParse = async (transactions, timestamp) => {
  let txFeeSum = 0;
  let gasPriceSum = 0;
  const txs = [];
  const rawTx = {};
  for (tx of transactions) {
    const transaction = {};
    Object.keys(tx).forEach(key => {
      if (key === 'r' || key === 'v' || key === 's' || key === 'blockHash') return;
      transaction[key.toLowerCase()] = tx[key];
    });

    rawTx[tx['hash']] = transaction;
  }

  for (const [hash, tx] of Object.entries(rawTx)) {
    try {
      const { result } = await getTransactionReceipt(hash);
      const { status, gasUsed } = result;
      tx['timestamp'] = timestamp;
      tx['status'] = status;
      tx['gasused'] = gasUsed;
      // txfee 는 계산하기
      tx['txfee'] = intToHex(tx['gasprice'] * tx['gasused']);
      txFeeSum += hexToInt(tx['txfee']);
      gasPriceSum += hexToInt(tx['gasprice']);
    } catch (error) {
      global.errorArray.push(hash);
      console.error('global.errorArray', global.errorArray);
    }
  }

  return {
    txs: Object.values(rawTx),
    txFeeSum,
    gasPriceSum,
  };
};

const updateTxError = async hash => {
  const tx = await selectTxOfHash(hash);
  const block = await selectBlockOfNumber(tx['blocksnumber']);
  const { result } = await getTransactionReceipt(hash);
  const { status, gasUsed } = result;
  tx['timestamp'] = block['timestamp'];
  tx['status'] = status;
  tx['gasused'] = gasUsed;
  // // txfee 는 계산하기
  tx['txfee'] = intToHex(tx['gasprice'] * tx['gasused']);
  block['blockreward'] += hexToInt(tx['txfee']);
  updateTx(tx);
  updateBlock(block);
};

module.exports = {
  blockParse,
  txsParse,
  updateTxError,
};
