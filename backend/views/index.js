const viewIndex = (blocks, txs) => {
  return {
    code: 200,
    status: 'success',
    message: 'main page response : List of 10 transactions and blocks',
    test: 'jenkins test 4',
    result: {
      blocks,
      txs,
    },
    blocksTotal: blocks.length,
    txsTotal: txs.length,
  };
};

module.exports = {
  viewIndex,
};
