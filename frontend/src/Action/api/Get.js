import axios from 'axios';
import * as types from '../ActionTypes';

const GetBlocks = data => {
  const { blocks } = data.result;
  return blocks;
};

const GetTxs = data => {
  const { txs } = data.result;
  return txs;
};

// const GetBlockAll = data => {
//   const { blocks } = data.blocks;
//   // console.log('전체블록', blocks);
//   return blocks;
// };

// const GetTxAll = data => {
//   const { txs } = data.txs;
//   // console.log('전체Tx', txs);
//   return txs;
// };

export const GetApi = async action => {
  let Data;
  // console.log('GetApi호출'); //됨
  const result = await axios.get('http://49.50.162.172/api/v1');
  const data = result.data;
  switch (action) {
    case types.LATESTBLOCKS: {
      // console.log('여기들어옴');
      Data = GetBlocks(data);
      break;
    }
    case types.LATESTTXS: {
      // console.log('들어옴');
      Data = GetTxs(data);
      break;
    }
    default:
      break;
  }
  return Data;
};

//All 요청주소로 수정해야함
// export const GetAll = async (action, p, pn) => {
//   let Data;
//   // console.log('GetApi호출'); //됨
//   const result = await axios.get('http://49.50.162.172/api/v1');
//   const data = result.data;
//   switch (action) {
//     case types.BLOCKSALL: {
//       // console.log('AllBlock');
//       Data = GetBlockAll(data);
//       break;
//     }
//     case types.TXSALL: {
//       console.log('Alltxs');
//       Data = GetTxAll(data);
//       break;
//     }
//     default:
//       break;
//   }
//   return Data;
// };
