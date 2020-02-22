require('dotenv').config();
const axios = require('axios');
const fs = require('fs');
const path = require('path');

// CUSTOM API
// util 은 src 경로를 벗어남
const { hexToString, intToHex } = require('../../../util/translate');
const HOST = process.env.HOST;

const getBlockByHash = () => {
  axios(OPTION).then(response => {
    let data = response.data;
    data = JSON.stringify(data);

    fs.writeFileSync(`/data/blocks_${number}.json`, data, 'utf-8');
  });
};

const getBlockByNumber_backup = number => {
  if (typeof number === 'number') {
    number = intToHex(number);
  }

  const data = {
    jsonrpc: '2.0',
    method: 'eth_getBlockByNumber',
    params: [number, true],
    id: 1,
  };
  const OPTION = {
    url: HOST,
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: JSON.stringify(data),
  };

  axios(OPTION).then(response => {
    let data = response.data;
    data = JSON.stringify(data);

    fs.writeFileSync(path.join(__dirname, `../data/block_${number}.json`), data, 'utf-8');
  });
};

const getBlockByNumber = number => {
  if (typeof number === 'number') {
    number = intToHex(number);
  }

  const data = {
    jsonrpc: '2.0',
    method: 'eth_getBlockByNumber',
    params: [number, true],
    id: 1,
  };
  const OPTION = {
    url: HOST,
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: JSON.stringify(data),
  };

  return axios(OPTION).then(response => {
    return response.data;
    // let data = response.data;
    // data = JSON.stringify(data);
    // return data;
    // fs.writeFileSync(path.join(__dirname, `../data/block_${number}.json`), data, 'utf-8');
  });
};

module.exports = {
  getBlockByNumber,
};
