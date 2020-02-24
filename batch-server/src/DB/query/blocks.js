const db = require('../models');
const { Blocks } = db;

const selectAllBlocks = async () => {
  const result = await Blocks.findAll({});
  console.log(result);
};
const insertBlock = () => {
  Blocks.create({
    number: '0x905898',
    timestamp: '0x5e424002',
    txcount: 3,
    miner: '0x5a0b54d5dc17e0aadc383d2db43b0a0d3e029c4c',
    blockreward: '0x0',
    unclesreward: '0x0',
    difficulty: '0x790617054bb7e',
    totaldifficulty: '0x2fa8a9911a7539d4438',
    size: '0x5f1',
    gasused: '0xc45ec',
    gaslimit: '0x9789f1',
    extradata: '0x5050594520737061726b706f6f6c2d6574682d636e2d687a32',
    hash: '0xba9405a0a55c49f8e39eca2ed5e7dc2316e21fe1b459fa766b1fd636cff365c6',
    parenthash: '0xb3957bd25425e50d46d47eb60cac55861713b820c6f8b878c18f4f8a3f6a8c1b',
    sha3uncles: '0xb3957bd25425e50d46d47eb60cac55861713b820c6f8b878c18f4f8a3f6a8c1b',
    nonce: '0xbd1810fc001239a4',
  });
};

// selectAllBlocks();
insertBlock();
