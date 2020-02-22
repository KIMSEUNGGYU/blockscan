require('dotenv').config();
const cron = require('node-cron');
const express = require('express');
const app = express();

// CUSTOM API
const { getBlockByNumber } = require('external/getblockbynumber');
const { getTransactionReceipt } = require('external/getTransactionReceipt');
const { intToHex } = require('../../util/translate');
const blockData = require('data/block_0x916f95.json');

const blockParse = blockData => {
  const { result } = blockData;
  const { transactions, uncles } = result;

  const block = {};
  Object.keys(result).forEach(key => {
    //   logsBloom, mixHash, stateRoot, receiptsRoot 는 데이터 베이스에 사용되지 않음.
    if (
      key === 'logsBloom' ||
      key === 'mixHash' ||
      key === 'stateRoot' ||
      key === 'receiptsRoot' ||
      key === 'transactionsRoot' ||
      key === 'transactions' ||
      key === 'uncles'
    ) {
      return;
    } else {
      block[key] = result[key];
    }
  });
  block['txCount'] = transactions.length;
  return { block, transactions };
};

const txsParser = async transactions => {
  // transactions 파싱해야함
  const txs = [];
  for (tx of transactions) {
    const transaction = {};
    Object.keys(tx).forEach(key => {
      if (key === 'r' || key === 'v' || key === 's' || key === 'blockHash') return;
      else {
        transaction[key] = tx[key];
      }
    });
    txs.push(transaction);
  }

  for (tx of txs) {
    const { hash } = tx;
    const { result } = await getTransactionReceipt(hash);
    const { status, gasUsed, transactionIndex } = result;
    tx['status'] = status;
    tx['gasUsed'] = gasUsed;
    tx['transactionIndex'] = transactionIndex;
    // txfee 는 계산하기
    tx['txfee'] = intToHex(tx['gasPrice'] * tx['gasUsed']);
  }

  return txs;
};

const main = async () => {
  // const blockData = await getBlockByNumber(9531966);
  const { block, transactions } = blockParse(blockData);
  //   block 은 block 데이터 베이스 타입
  const txs = await txsParser(transactions);
  console.log(block);
  console.log(txs);
};
main();

const crontab = () => {
  // schedule tasks to be run on the server
  // number = 0;
  // cron.schedule("*/5 * * * * *", function() {
  //   console.log(`CREATE BLOCK FILE: ${number}`);
  //   getBlockByNumber(number);
  //   number += 1;
  // });
  // app.listen(process.env.PORT);
};
