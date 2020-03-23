const { listOfRecentTxs, getSpecificTxs, getTxHashInfo } = require('../models/txs');
const { hexToInt } = require('../helper/translate');

const SECOND = 1000;
const parseTxs = async () => {
    const rows = await listOfRecentTxs();
    const txs = [];

    for (row of rows) {
        const { hash, timestamp, from, to, txfee } = row;
            txs.push({
            hash,
            timestamp: hexToInt(timestamp) * SECOND,
            from,
            to,
            txfee,
        });
    }

    return txs;
    };

const parseSpecificTxs = async (p, pn) => {
    const rows = await getSpecificTxs(p, pn);
    const txs = [];

    for (row of rows) {
        const { hash, timestamp, from, to, txfee } = row;
            txs.push({
            hash,
            timestamp: hexToInt(timestamp) * SECOND,
            from,
            to,
            txfee,
        });
    }

    return txs;
}

const parseTxHashInfo = async (txhash) => {
    const rows = await getTxHashInfo(txhash);
    return rows
}

module.exports = {
    parseSpecificTxs,
    parseTxs,
    parseTxHashInfo
};