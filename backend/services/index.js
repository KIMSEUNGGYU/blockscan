const web3Utils = require('web3-utils');

const { listOfRecentBlocks } = require('../models/blocks');
const { listOfRecentTxs } = require('../models/txs');

const SECOND = 1000;
const { hexToInt } = require('../helper/translate');
const parseBlocks = async () => {
  const rows = await listOfRecentBlocks();
  const blocks = [];

  for (row of rows) {
    const { number, timestamp, miner, txcount, blockreward } = row;
    blocks.push({
      number: hexToInt(number),
      timestamp: hexToInt(timestamp) * SECOND,
      miner,
      txCount: txcount,
      blockReward: parseFloat(blockreward),
    });
  }

  return blocks;
};

console.log();
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
      txFee: parseFloat(web3Utils.fromWei(hexToInt(txfee).toString())),
    });
  }

  return txs;
};

module.exports = {
  parseBlocks,
  parseTxs,
};
