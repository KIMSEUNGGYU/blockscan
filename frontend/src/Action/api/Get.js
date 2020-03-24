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
      Data = GetBlocks(data);
      break;
    }
    case types.TXSALL: {
      console.log('Alltxs');
      Data = GetTxs(data);
      break;
    }
    default:
      break;
  }
  return Data;
};
