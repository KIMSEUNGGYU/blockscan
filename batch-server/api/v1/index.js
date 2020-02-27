require('dotenv').config();
const cron = require('node-cron');
const express = require('express');
const web3Utils = require('web3-utils');
const app = express();

// CUSTOM API
const {
  getBlockByNumber,
  getTransactionReceipt,
  getUncleByBlockHashAndIndex,
} = require('external/infura');

// helper
const { intToHex, hexToInt } = require('helper/translate');

const sequelize = require('DB/models').sequelize;
const { selectAllBlocks, insertBlock, selectJoinBlockAndTxs } = require('DB/query/blocks');
const { selectAllTxs, insertTxs, selectTxs } = require('DB/query/txs');
// sequelize.sync();

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
  // transactions 파싱해야함
  const txs = [];
  let txFeeSum = 0;
  for (tx of transactions) {
    const transaction = {};
    Object.keys(tx).forEach(key => {
      if (key === 'r' || key === 'v' || key === 's' || key === 'blockHash') return;
      transaction[key.toLowerCase()] = tx[key];
    });
    txs.push(transaction);
  }

  for (tx of txs) {
    const { hash } = tx;
    const { result } = await getTransactionReceipt(hash);
    const { status, gasUsed } = result;
    tx['timestamp'] = timestamp;
    tx['status'] = status;
    tx['gasused'] = gasUsed;
    // txfee 는 계산하기
    tx['txfee'] = intToHex(tx['gasprice'] * tx['gasused']);
    txFeeSum += hexToInt(tx['txfee']);
  }

  return { txs, txFeeSum };
};

const main = async number => {
  const BASE_BLOCK_REWARD = 2;

  const blockData = await getBlockByNumber(number);
  const { block, transactions } = await blockParse(blockData);
  let { txs, txFeeSum } = await txsParse(transactions, block['timestamp']);

  // 블록 관련 데이터 추가 (unclesreward, blockreward)
  txFeeSum = web3Utils.fromWei(txFeeSum.toString(), 'ether');
  block['blockreward'] =
    BASE_BLOCK_REWARD +
    parseFloat(parseFloat(txFeeSum).toFixed(18)) +
    BASE_BLOCK_REWARD * block['uncles'] * 3.125 * 0.01;

  // db 에 데이터 삽입
  insertBlock(block);
  insertTxs(txs);
};
// main(9550279);
// main(9559838); // uncle 블록 2개

const crontab = () => {
  console.log(`start crontab: ${new Date()}`);
  // schedule tasks to be run on the server
  number = 9550316;
  cron.schedule('*/5 * * * *', function() {
    console.log(`PARSE BLOCK: ${number} : ${new Date()}`);
    main(number);
    number += 1;
  });
  // app.listen(process.env.PORT);
};
crontab();
