const { pool } = require('./connection');

const listOfRecentTxs = async () => {
  const [rows, fields] = await pool.query(
    'select * from txs order by blocksnumber desc, txs.index desc limit 10',
  );
  return rows;
};

module.exports = {
  listOfRecentTxs,
};
