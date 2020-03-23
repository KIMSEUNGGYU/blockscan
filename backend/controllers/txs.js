const { parseSpecificTxs, parseTxHashInfo } = require('../services/txs')
const { viewTxs, viewTxInfo } = require('../views/txs')
const { viewWrongRequest, viewNotFoundData } = require('../views/error')

const controllerTxs = async (req, res, next) => {
    const pn = req.query.pn;
    const p = req.query.p;
    
    if (!pn || !p || p == 0 || pn == 0){
        res.json(viewWrongRequest());
        return;
    };
    
    const txs = await parseSpecificTxs(p, pn);
    if (txs.length == 0) {
        res.json(viewNotFoundData());
        return;
    }


    res.json(viewTxs(txs))
}

const controllerTxDetail = async (req, res, next) => {
    txHash = req.params.txHash
    
    const txHashInfo = await parseTxHashInfo(txHash)
    if (!txHashInfo.length) {
        res.json(viewNotFoundData())
        return;
    }
    res.json(viewTxInfo(txHashInfo[0]))
}

module.exports = {
    controllerTxs,
    controllerTxDetail
}