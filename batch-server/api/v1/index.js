require('dotenv').config();
const cron = require('node-cron');
const express = require('express');
const web3Utils = require('web3-utils');
const app = express();

// INFURA API
const { getBlockByNumber } = require('external/infura');

// services
const { blockParse, txsParse, updateTxError } = require('services');

const { selectAllBlocks, insertBlock, selectJoinBlockAndTxs } = require('DB/query/blocks');
const { selectAllTxs, insertTxs, selectTxs, testTx } = require('DB/query/txs');
const sequelize = require('DB/models').sequelize;
sequelize
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
    sequelize.sync();
    console.log(`start job crontab: ${new Date()}`);
    job.start();
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });

global.errorArray = [];
global.number = 9700095;

const main = async number => {
  const BASE_BLOCK_REWARD = 2;

  const blockData = await getBlockByNumber(number);
  const { block, transactions } = await blockParse(blockData);
  let { txs, txFeeSum, gasPriceSum } = await txsParse(transactions, block['timestamp']);

  // 블록 관련 데이터 추가 (unclesreward, blockreward, gaspirceavg)
  txFeeSum = web3Utils.fromWei(txFeeSum.toString(), 'ether');
  block['blockreward'] =
    BASE_BLOCK_REWARD +
    parseFloat(parseFloat(txFeeSum).toFixed(18)) +
    BASE_BLOCK_REWARD * block['uncles'] * 3.125 * 0.01;
  // gaspriceavg 속성 구하기
  const gwei = web3Utils.toWei(gasPriceSum.toString(), 'gwei');
  const avgGasPrice = (gwei * Math.pow(10, -18)) / block['txcount'];
  block['gaspriceavg'] = avgGasPrice;

  // db 에 데이터 삽입
  try {
    await insertBlock(block);
    await insertTxs(txs);
  } catch (error) {
    console.error('insert block and txs error', error);
  }
};

const errorHandle = async () => {
  try {
    console.log('ERROR Handle EXE');
    while (global.errorArray.length) {
      const hash = global.errorArray.shift();
      await updateTxError(hash);
      console.log('update tx:', hash);
    }
  } catch (error) {
    console.error('ERROR HANDLE ERROR', error);
  } finally {
    job.start();
  }
};

const job = cron.schedule('*/15 * * * * *', async function() {
  const result = await testTx();
  for (tx of result) {
    global.errorArray.push(tx['hash']);
  }

  if (global.errorArray.length) {
    errorHandle();
    job.stop();
  } else {
    console.log(`PARSE BLOCK: ${global.number} : ${new Date()}`);
    main(global.number);
    global.number += 1;
  }
});

job.stop();
