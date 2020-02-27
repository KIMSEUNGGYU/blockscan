const db = require('DB/models');
const { Txs } = db;
const { hexToInt } = require('helper/translate');

const selectAllTxs = async () => {
  const result = await Txs.findAll({ raw: true });
  return result;
};

const selectTxs = async blockNumber => {
  const result = await Txs.findAll({
    raw: true,
    where: {
      blocks_number: blockNumber,
    },
  });

  return result;
};
const insertTxs = txs => {
  for (tx of txs) {
    const {
      hash,
      status,
      timestamp,
      from,
      to,
      value,
      txfee,
      gas,
      gasprice,
      gasused,
      nonce,
      input, // inputdata
      transactionindex,
      blocknumber,
    } = tx;

    Txs.create({
      hash,
      status,
      timestamp,
      from,
      to,
      value,
      txfee,
      gaslimit: gas,
      gasprice,
      gasused,
      nonce,
      inputdata: input,
      index: hexToInt(transactionindex),
      blocks_number: blocknumber,
    });
  }
};

module.exports = {
  selectAllTxs,
  insertTxs,
  selectTxs,
};
