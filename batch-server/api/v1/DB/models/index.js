'use strict';
require('dotenv').config();

const Sequelize = require('sequelize');

const env = process.env.NODE_ENV || 'development';
// const config = require(path.join(__dirname, '..', 'config', 'config.js'))[env];

const config = require('DB/config/config.js')['config'][env];

const db = {};
const sequelize = new Sequelize(config.database, config.username, config.password, config);

// 시퀄라이즈 테이블 정의
db.Blocks = require('./blocks')(sequelize, Sequelize);
db.Txs = require('./txs')(sequelize, Sequelize);

// 시퀄라이즈 관계 정의
db.Blocks.hasMany(db.Txs, { foreignKey: 'blocksnumber', sourceKey: 'number' });
db.Txs.belongsTo(db.Blocks, { foreignKey: 'blocksnumber', sourceKey: 'number' });

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
