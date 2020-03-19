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
      txcount,
      blockreward: parseFloat(blockreward),
    });
  }

  return blocks;
};

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

module.exports = {
  parseBlocks,
  parseTxs,
};
