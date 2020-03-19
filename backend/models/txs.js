const { pool } = require('./connection');

const listOfRecentTxs = async () => {
  const [rows, fields] = await pool.query(
    'select * from txs order by blocksnumber desc, txs.index desc limit 10',
  );
  return rows;
};

const gasPriceOfBlockNumber = async number => {
  number = '0x9256f5';
  const [rows, fields] = await pool.query(
    `select gasprice
     from txs
     where blocksnumber='${number}'
    `,
  );

  console.log(rows);
  return rows;
};

// export default {

// }
module.exports = {
  listOfRecentTxs,
  gasPriceOfBlockNumber,
};
