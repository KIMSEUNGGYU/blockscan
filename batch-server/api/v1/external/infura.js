require('dotenv').config();
const axios = require('axios');

// CUSTOM API
const { intToHex } = require('helper/translate');

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
    url: process.env.HOST,
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: JSON.stringify(data),
  };

  return axios(OPTION).then(response => {
    return response.data;
  });
};

const getTransactionReceipt = hash => {
  const data = {
    jsonrpc: '2.0',
    method: 'eth_getTransactionReceipt',
    params: [hash],
    id: 1,
  };
  const OPTION = {
    url: process.env.HOST,
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: JSON.stringify(data),
  };

  return axios(OPTION)
    .then(response => {
      return response.data;
    })
    .catch(error => {
      console.log('txReceipt error', error);
    });
  // .then(response => {

  // }).catch(error) {
  //   console.log('txReceipt error', error);
  // };
};

const getUncleByBlockHashAndIndex = (blockHash, index) => {
  const data = {
    jsonrpc: '2.0',
    method: 'eth_getUncleByBlockHashAndIndex',
    params: [blockHash, index],
    id: 1,
  };
  const OPTION = {
    url: process.env.HOST,
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: JSON.stringify(data),
  };

  return axios(OPTION).then(response => {
    return response.data;
  });
};

module.exports = {
  getBlockByNumber,
  getTransactionReceipt,
  getUncleByBlockHashAndIndex,
};
