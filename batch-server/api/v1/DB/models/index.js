'use strict';

require('dotenv').config();
const Sequelize = require('sequelize');

const db = {};
const sequelize = new Sequelize(
  process.env.DB_DATABASE,
  process.env.DB_USER,
  process.env.DB_PASSWORD,
  {
    host: process.env.DB_HOST,
    dialect: 'mysql',
    pool: {
      max: 10,
      min: 0,
      acquire: 30000,
      idle: 10000,
    },
    logging: false,
  },
);

// 시퀄라이즈 테이블 정의
db.Blocks = require('./blocks')(sequelize, Sequelize);
db.Txs = require('./txs')(sequelize, Sequelize);

// 시퀄라이즈 관계 정의
db.Blocks.hasMany(db.Txs, { foreignKey: 'blocks_number', sourceKey: 'number' });
db.Txs.belongsTo(db.Blocks, { foreignKey: 'blocks_number', sourceKey: 'number' });

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
