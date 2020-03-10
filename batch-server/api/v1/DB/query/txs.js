const db = require('DB/models');
const { Txs } = db;
const { hexToInt } = require('helper/translate');

const selectAllTxs = async () => {
  const result = await Txs.findAll({ raw: true });
  return result;
};

const selectTxOfHash = async txHash => {
  try {
    const result = await Txs.findOne({
      raw: true,
      where: {
        hash: txHash,
      },
    });

    return result;
  } catch (error) {
    console.error('selectTxOfHash', error);
  }
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
      blocksnumber: blocknumber,
    });
  }
};

const updateTx = async tx => {
  const { status, timestamp, txfee, hash } = tx;
  try {
    await Txs.update(
      { status, timestamp, txfee },
      {
        where: {
          hash,
        },
      },
    );
    console.log('success update');
  } catch (error) {
    console.error('tx update error', error);
  }
};

const testTx = async () => {
  const result = await Txs.findAll({
    raw: true,
    where: {
      txfee: null,
    },
  });
  return result;
};

module.exports = {
  selectAllTxs,
  insertTxs,
  selectTxOfHash,
  updateTx,
  testTx,
};
