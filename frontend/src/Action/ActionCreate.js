import * as types from './ActionTypes';
import { GetApi } from './api/Get';

export const LatestBlocks = () => async dispatch => {
  dispatch({ type: types.REQUESTBLOCKS });
  try {
    const response = await GetApi(types.LATESTBLOCKS);
    dispatch({ type: types.REQUESTBLOCKS, payload: response });
  } catch (e) {
    dispatch({
      type: types.FAILURE,
      payload: e,
    });
    throw e;
  }
};

export const LatestTxs = () => async dispatch => {
  dispatch({ type: types.REQUESTTXS });
  try {
    const response = await GetApi(types.LATESTTXS);
    dispatch({ type: types.REQUESTTXS, payload: response });
    dispatch({ type: types.SUCCESS });
  } catch (e) {
    dispatch({
      type: types.FAILURE,
      payload: e,
    });
    throw e;
  }
};
