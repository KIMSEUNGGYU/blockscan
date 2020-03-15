const mysql = require('mysql2');

// Create the connection pool. The pool-specific settings are the defaults
const db = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  database: process.env.DB_DATABASE,
  password: process.env.DB_PASSWORD,
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
});

const pool = db.promise();

module.exports = {
  pool,
};
