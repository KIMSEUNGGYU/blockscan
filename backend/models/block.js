const { pool } = require('./connection');

const blockDetail = async number => {
  const [rows, fields] = await pool.query(
    `select *
    from blocks
    where number='${number}'
    `,
  );

  return rows[0];
};

module.exports = {
  blockDetail,
};
