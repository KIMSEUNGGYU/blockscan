'use strict';

const path = require('path');
const Sequelize = require('sequelize');

const env = process.env.NODE_ENV || 'development';
const config = require(__dirname + '/../config/config.json')[env];
const db = {};

const sequelize = new Sequelize(config.database, config.username, config.password, config);

// 시퀄라이즈 테이블 정의
db.Blocks = require('./blocks')(sequelize, Sequelize);
db.Txs = require('./txs')(sequelize, Sequelize);

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
