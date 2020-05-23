import axios from 'axios';
import qs from 'qs';
import * as types from '../ActionTypes';

const GetBlocks = (data, total) => {
  if (total === undefined) {
    const { blocks } = data.result;
    return blocks;
  }
  const { blocks, totalBlock } = data.result;
  return { blocks, totalBlock };
};

const GetTxs = (data, total) => {
  if (total === undefined) {
    const { txs } = data.result;
    return txs;
  }
  const { txs, totalTx } = data.result;
  return { txs, totalTx };
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
  switch (action) {
    case types.BLOCKSALL: {
      const result = await axios.get(
        'http://49.50.162.172/api/v1/blocks?' + qs.stringify({ p, pn }),
      );
      const data = result.data;
      Data = GetBlocks(data, true);
      break;
    }
    case types.TXSALL: {
      const result = await axios.get('http://49.50.162.172/api/v1/txs?' + qs.stringify({ p, pn }));
      const data = result.data;
      Data = GetTxs(data, true);
      break;
    }
    default:
      break;
  }
  return Data;
};

export const GetInfo = async (action, data) => {
  let Data;
  switch (action) {
    case types.DETAILBLOCK: {
      const response = await axios.get(`http://49.50.162.172/api/v1/block/${data}`);
      const { block } = response.data.result;
      Data = block;
      break;
    }
    case types.DETAILTX: {
      const response = await axios.get(`http://49.50.162.172/api/v1/txs/${data}`);
      const { txInfo } = response.data.result;
      Data = txInfo;
      break;
    }
    default:
      break;
  }
  return Data;
};
