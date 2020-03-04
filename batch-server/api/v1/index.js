require('dotenv').config();
const cron = require('node-cron');
const express = require('express');
const web3Utils = require('web3-utils');
const app = express();

// INFURA API
const { getBlockByNumber } = require('external/infura');

// services
const { blockParse, txsParse } = require('services');

const { selectAllBlocks, insertBlock, selectJoinBlockAndTxs } = require('DB/query/blocks');
const { selectAllTxs, insertTxs, selectTxs } = require('DB/query/txs');
const sequelize = require('DB/models').sequelize;
sequelize.sync();

global.errorArray = [];
global.number = 9590517;

const main = async number => {
  const BASE_BLOCK_REWARD = 2;

  const blockData = await getBlockByNumber(number);
  const { block, transactions } = await blockParse(blockData);
  let { txs, txFeeSum } = await txsParse(transactions, block['timestamp']);

  // 블록 관련 데이터 추가 (unclesreward, blockreward)
  txFeeSum = web3Utils.fromWei(txFeeSum.toString(), 'ether');
  block['blockreward'] =
    BASE_BLOCK_REWARD +
    parseFloat(parseFloat(txFeeSum).toFixed(18)) +
    BASE_BLOCK_REWARD * block['uncles'] * 3.125 * 0.01;

  // db 에 데이터 삽입
  try {
    await insertBlock(block);
    await insertTxs(txs);
  } catch (error) {
    console.error('insert block and txs error', error);
  }
};
// main(9590517);

const job = cron.schedule('*/15 * * * * *', function() {
  console.log(`PARSE BLOCK: ${global.number} : ${new Date()}`);
  if (global.errorArray.length) {
    job.stop();
    errorJob.start();
  } else {
    main(global.number);
    global.number += 1;
  }
});

const errorJob = cron.schedule('*/5 * * * * *', function() {
  console.log('ERROR JOB EXE:', global.errorArray.length);
  if (global.errorArray.length) {
    let hash = global.errorArray.shift();
    console.log('ERROR JOB HASH:', hash);
    // console.log(global.errorArray.shift());
  } else {
    errorJob.stop();
    job.start();
  }
});

const crontab = () => {
  console.log(`start job crontab: ${new Date()}`);
  job.start();
  errorJob.stop();
};
crontab();
