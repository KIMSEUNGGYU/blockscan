const { pool } = require('./connection');

const listOfRecentBlocks = async () => {
  const [rows, fields] = await pool.query('select * from blocks order by number desc limit 10');
  return rows;
};

const listOfBlocks = async (start, pageNumber) => {
  // txs 쿼리문
  const [rows, fields] = await pool.query(
    `select *
    from (select * 
      from blocks
      order by number desc) blocks
    limit ${start}, ${pageNumber}
    `,
  );

  return rows;
};

module.exports = {
  listOfRecentBlocks,
  listOfBlocks,
};
