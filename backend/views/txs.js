const viewTxs = (txs, totalTx) => {
  return {
    code: 200,
    status: 'success',
    message: 'Transaction list response',
    result: {
      txs,
      totalTx,
    },
    total: txs.length,
  };
};

const viewTxInfo = txInfo => {
  return {
    code: 200,
    status: 'success',
    message: 'Transaction Info response',
    result: {
      txInfo,
    },
  };
};

module.exports = {
  viewTxs,
  viewTxInfo,
};
