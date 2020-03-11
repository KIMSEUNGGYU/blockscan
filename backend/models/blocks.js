const { pool } = require('./connection');

const listOfRecentBlocks = async () => {
  const [rows, fields] = await pool.query('select * from blocks order by number desc limit 10');
  return rows;
};

module.exports = {
  listOfRecentBlocks,
};
