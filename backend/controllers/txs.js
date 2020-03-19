const { parseSpecificTxs } = require('../services/txs')
const { viewTxs } = require('../views/txs')
const { viewWrongRequest, viewNotFoundData } = require('../views/error')

const controllerTxs = async (req, res, next) => {
    const pn = req.query.pn;
    const p = req.query.p;
    
    if (!pn || !p || p == 0 || pn == 0){
        res.json(viewWrongRequest());
        return;
    };
    
    const txs = await parseSpecificTxs(p, pn);


    res.json(viewTxs(txs))
}

module.exports = {
    controllerTxs,
}