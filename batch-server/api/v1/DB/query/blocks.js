const db = require('DB/models');
const { Blocks, Txs } = db;
const { intToHex } = require('helper/translate');

const selectAllBlocks = async () => {
  const result = await Blocks.findAll({ raw: true });
  return result;
};

const selectJoinBlockAndTxs = async blockNumber => {
  if (typeof blockNumber === 'number') {
    blockNumber = intToHex(blockNumber);
  }

  const result = await Blocks.findAll({
    raw: true,
    include: [
      {
        model: Txs,
        where: { blocks_number: blockNumber },
      },
    ],
  });

  return result;
};

const insertBlock = blockData => {
  const {
    number,
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
  } = blockData;

  Blocks.create({
    number,
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
  });
};

module.exports = {
  selectAllBlocks,
  insertBlock,
  selectJoinBlockAndTxs,
};
