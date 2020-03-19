const { listOfBlocks } = require('../models/blocks');
const { hexToInt } = require('../helper/translate');
const SECOND = 1000;

const parseBlockList = async (pn, p) => {
  // paging 범위 지정
  const startCount = (p - 1) * pn + 1;

  const rows = await listOfBlocks(startCount, pn);
  const blocks = [];

  for (row of rows) {
    const {
      number,
      timestamp,
      miner,
      txcount,
      uncles,
      gasused,
      gaslimit,
      blockreward,
      gaspriceavg,
    } = row;

    blocks.push({
      number: hexToInt(number),
      timestamp: hexToInt(timestamp) * SECOND,
      txCount: txcount,
      uncles,
      miner,
      gasUsed: hexToInt(gasused),
      gasLimit: hexToInt(gaslimit),
      avgGasPrice: parseFloat(gaspriceavg),
      blockReward: parseFloat(blockreward),
    });
  }
  return blocks;
};

module.exports = {
  parseBlockList,
};
