const { pool } = require('./connection');

const listOfRecentTxs = async () => {
  const [rows, fields] = await pool.query(
    'select * from txs order by blocksnumber desc, txs.index desc limit 10',
  );
  return rows;
};


const getSpecificTxs = async (p, pn) => {
  const [rows, fields] = await pool.query(
    `SELECT * FROM txs ORDER BY blocksnumber DESC, txs.index DESC LIMIT ${pn} OFFSET ${(p * pn) - 1}`
  );
  return rows
}

const getTxHashInfo = async (txHash) => {
  const [rows, fields] = await pool.query(
    `SELECT * FROM txs WHERE hash = '${txHash}'`
  )
  return rows
}

module.exports = {
  getSpecificTxs,
  listOfRecentTxs,
  getTxHashInfo
};
