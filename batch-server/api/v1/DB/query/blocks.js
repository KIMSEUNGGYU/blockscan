const db = require('DB/models');
const { Blocks, Txs } = db;
const { intToHex } = require('helper/translate');

const selectBlockOfNumber = async number => {
  try {
    const result = await Blocks.findOne({
      raw: true,
      where: {
        number: number,
      },
    });

    return result;
  } catch (error) {
    console.error('selectBlockOfNumber error', error);
  }
};

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

const insertBlock = async blockData => {
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
    gaspriceavg,
  } = blockData;

  await Blocks.create({
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
    gaspriceavg: gaspriceavg || 0.0,
  });
};

const updateBlock = async block => {
  const { blockreward, number } = block;
  try {
    await Blocks.update(
      {
        blockreward,
      },
      {
        where: {
          number,
        },
      },
    );
    console.log('update block success');
  } catch (error) {
    console.log('update block error', error);
  }
};

module.exports = {
  selectAllBlocks,
  insertBlock,
  selectJoinBlockAndTxs,
  selectBlockOfNumber,
  updateBlock,
};
