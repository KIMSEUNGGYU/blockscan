const db = require('../models');
const { Txs } = db;

const selectAllTxs = async () => {
  const result = await Txs.findAll({});
  console.log(result);
};
// selectAllTxs();

const insertTx = () => {
  Txs.create({
    ids: 0,
    hash: '0x804bbc9b4e5011cd5ae4181d3a7ea9bba52ecf1093191567591e2c3b90d6cc65',
    status: '0x1',
    timestamp: '0x5e424002',
    from: '0x912fd21d7a69678227fe6d08c64222db41477ba0',
    to: '0x6b175474e89094c44da98b954eedeac495271d0f',
    value: '0x0',
    txfee: '0x0',
    gasprice: '0x342770c00',
    gaslimit: '0xcb3e',
    gasused: '0xcb3e',
    nonce: '0xf093',
    inputdata:
      '0xa9059cbb00000000000000000000000047b0f09d54af9de6f375ce6638436ca1cad21a4b000000000000000000000000000000000000000000000000458487ff871fa3fd',
    index: '0x0',
    blocks_number: '0x905898',
  });
};
// insertTx();
