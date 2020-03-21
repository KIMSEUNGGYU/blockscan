const { blockDetail } = require('../models/block');
const { hexToInt, h2d, numberWithCommas } = require('../helper/translate');

const parseBlock = async number => {
  const BASE_BLOCK_REWARD = 2;
  const block = await blockDetail(number);

  // 데이터가 없는 경우
  if (!block) return {};

  const {
    timestamp,
    txcount,
    miner,
    blockreward,
    uncles,
    unclesreward,
    difficulty,
    totaldifficulty,
    size,
    gasused,
    gaslimit,
    extradata,
    hash,
    parenthash,
    sha3uncles,
    nonce,
  } = block;

  return {
    number: hexToInt(number),
    timestamp: hexToInt(timestamp),
    transactions: txcount,
    miner,
    blockReward: parseFloat(blockreward),
    unclesReward: unclesreward,
    difficulty: numberWithCommas(hexToInt(difficulty)),
    totalDifficulty: numberWithCommas(h2d(totaldifficulty)),
    size: numberWithCommas(hexToInt(size)),
    gasUsed: numberWithCommas(hexToInt(gasused)),
    gasLimit: numberWithCommas(hexToInt(gaslimit)),
    extraData: extradata,
    hash,
    parentHash: parenthash,
    sha3Uncles: sha3uncles,
    nonce,
    gasUsedPercent: ((hexToInt(gasused) / hexToInt(gaslimit)) * 100).toFixed(2),
    blockRewardUncles: BASE_BLOCK_REWARD * uncles * 3.125 * 0.01,
  };
};

module.exports = {
  parseBlock,
};
