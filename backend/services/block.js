const { blockDetail } = require('../models/block');
const { hexToInt, h2d, numberWithCommas } = require('../helper/translate');

const parseBlock = async number => {
  const block = await blockDetail(number);

  // 데이터가 없는 경우
  if (!block) return {};

  const {
    timestamp,
    txcount,
    miner,
    blockreward,
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

  // console.log(hexToInt(gaslimit));
  // console.log(hexToInt(gasused));
  // console.log(((hexToInt(gasused) / hexToInt(gaslimit)) * 100).toFixed(2));

  return {
    number: hexToInt(number),
    timestamp: hexToInt(timestamp),
    transactions: txcount,
    miner,
    blockReward: parseFloat(blockreward),
    unclesReward: hexToInt(unclesreward),
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
  };
};

module.exports = {
  parseBlock,
};
