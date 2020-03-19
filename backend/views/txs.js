const viewTxs = (txs) => {
    return {
        code: 200,
        status: 'success',
        message: 'Transaction list response',
        result: {
        txs,
        },
        total: txs.length,
    };
};
module.exports = {
    viewTxs,
};