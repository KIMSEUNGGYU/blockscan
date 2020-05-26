import { handleActions } from 'redux-actions';
import { REQUESTBLOCKS, REQUESTTXS, REQUEST, SUCCESS, FAILURE } from '../Action/ActionTypes';

const initialState = {
  loading: {
    Request: false,
    LoadingBlocks: false,
    LoadingTxs: false,
  },
  Blocks: null,
  Txs: null,
};

const MainReducer = handleActions(
  {
    [REQUEST]: state => ({
      ...state,
      loading: {
        ...state.loading,
        Request: true,
        LoadingBlocks: true,
        LoadingTxs: true,
      },
    }),

    [REQUESTBLOCKS]: (state, action) => ({
      ...state,
      loading: {
        ...state.loading,
        LoadingBlocks: false,
      },
      Blocks: action.payload,
    }),

    [REQUESTTXS]: (state, action) => ({
      ...state,
      loading: {
        ...state.loading,
        LoadingTxs: false,
      },
      Txs: action.payload,
    }),

    [FAILURE]: state => ({
      ...state,
      loading: {
        ...state.loading,
        Request: false,
        LoadingBlocks: false,
        LoadingTxs: false,
      },
    }),

    [SUCCESS]: state => ({
      ...state,
      loading: {
        ...state.loading,
        Request: false,
      },
    }),
  },
  initialState,
);
export default MainReducer;
