const web3Utils = require('web3-utils');

const { listOfRecentTxs, getSpecificTxs, getTxHashInfo } = require('../models/txs');
const { hexToInt, numberWithCommas } = require('../helper/translate');

const SECOND = 1000;
const parseTxs = async () => {
  const rows = await listOfRecentTxs();
  const txs = [];

  for (row of rows) {
    const { hash, timestamp, from, to, txfee } = row;
    txs.push({
      hash,
      timestamp: hexToInt(timestamp) * SECOND,
      from,
      to,
      txfee,
    });
  }

  return txs;
};

const parseSpecificTxs = async (p, pn) => {
  const rows = await getSpecificTxs(p, pn);
  const txs = [];

  for (row of rows) {
    const { hash, blocksnumber, timestamp, from, to, value, txfee } = row;
    txs.push({
      hash,
      blocksnumber: hexToInt(blocksnumber),
      timestamp: hexToInt(timestamp) * SECOND,
      from,
      to,
      value: parseFloat(web3Utils.fromWei(hexToInt(value).toString())),
      txfee: parseFloat(web3Utils.fromWei(hexToInt(txfee).toString())),
    });
  }

  return txs;
};

// /txs/txHash
const parseTxHashInfo = async txhash => {
  const transaction = await getTxHashInfo(txhash);

  // 데이터가 없는 경우
  if (!transaction) return {};
  //   console.log('parseTxHashInfo', transaction);
  const {
    hash,
    status,
    timestamp,
    from,
    to,
    value,
    txfee,
    gasprice,
    gaslimit,
    gasused,
    nonce,
    inputdata,
    index,
    blocksnumber,
  } = transaction;
  return {
    hash,
    status: hexToInt(status),
    timestamp: hexToInt(timestamp),
    from,
    to,
    value: hexToInt(value),
    txfee: parseFloat(web3Utils.fromWei(hexToInt(txfee).toString())),
    gasused: numberWithCommas(hexToInt(gasused)),
    gaslimit: numberWithCommas(hexToInt(gaslimit)),
    gasprice: web3Utils.fromWei(hexToInt(gasprice).toString()),
    nonce: hexToInt(nonce),
    inputdata,
    index,
    blocksnumber: hexToInt(blocksnumber),
  };
  //   return transaction;
};

module.exports = {
  parseSpecificTxs,
  parseTxs,
  parseTxHashInfo,
};
