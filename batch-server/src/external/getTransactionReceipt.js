require('dotenv').config();
const axios = require('axios');

const getTransactionReceipt = hash => {
  const HOST = process.env.HOST;

  const data = {
    jsonrpc: '2.0',
    method: 'eth_getTransactionReceipt',
    params: [hash],
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
    let data = response.data;
    return data;
    // const { result } = data;
    // const { gasUsed } = result;
    // return parseInt(gasUsed);
  });
};

module.exports = {
  getTransactionReceipt,
};
