import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { LatestBlocks, LatestTxs } from '../../../../Action/ActionCreate';
import RenderList from './RenderList';

const ReturnList = ({
  LatestBlocks,
  LatestTxs,
  Request,
  LoadingBlocks,
  LoadingTxs,
  Blocks,
  Txs,
}) => {
  useEffect(() => {
    LatestBlocks();
    LatestTxs();
  }, [Request, LatestBlocks, LatestTxs]);

  return (
    <RenderList REQUESTBLOCKS={LoadingBlocks} REQUESTTXS={LoadingTxs} Blocks={Blocks} Txs={Txs} />
  );
};

export default connect(
  ({ Main }) => ({
    Request: Main.loading.Request,
    LoadingBlocks: Main.loading.LoadingBlocks,
    LoadingTxs: Main.loading.LoadingTxs,
    Blocks: Main.Blocks,
    Txs: Main.Txs,
  }),
  {
    LatestBlocks,
    LatestTxs,
  },
)(ReturnList);
