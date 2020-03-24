import axios from 'axios';
import qs from 'qs';
import * as types from '../ActionTypes';

const GetBlocks = data => {
  const { blocks } = data.result;
  return blocks;
};

const GetTxs = data => {
  const { txs } = data.result;
  return txs;
};

const GetBlockList = data => {
  const { blocks, totalBlock } = data.result;
  return { blocks, totalBlock };
};

const GetTxsList = data => {
  const { txs } = data.result;
  // const { txs, totalTx } = data.result;
  // return {txs, totalTx}
  return { txs };
};

export const GetApi = async action => {
  let Data;
  const result = await axios.get('http://49.50.162.172/api/v1');
  const data = result.data;
  switch (action) {
    case types.LATESTBLOCKS: {
      Data = GetBlocks(data);
      break;
    }
    case types.LATESTTXS: {
      Data = GetTxs(data);
      break;
    }
    default:
      break;
  }
  return Data;
};

export const GetAll = async (action, p, pn) => {
  let Data;
  const result = await axios.get('http://49.50.162.172/api/v1/blocks?' + qs.stringify({ p, pn }));
  const data = result.data;

  switch (action) {
    case types.BLOCKSALL: {
      Data = GetBlockList(data);
      break;
    }
    default:
      break;
  }
  return Data;
};

export const GetTxAll = async (action, p, pn) => {
  let Data;
  const result = await axios.get('http://49.50.162.172/api/v1/txs?' + qs.stringify({ p, pn }));
  const data = result.data;

  switch (action) {
    case types.TXSALL: {
      Data = GetTxsList(data);
      break;
    }
    default:
      break;
  }
  return Data;
};
