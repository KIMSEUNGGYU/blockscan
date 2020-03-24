const { parseSpecificTxs, parseTxHashInfo, getTotalTxs } = require('../services/txs');
const { viewTxs, viewTxInfo } = require('../views/txs');
const { viewWrongRequest, viewNotFoundData } = require('../views/error');

const controllerTxs = async (req, res, next) => {
  const pn = req.query.pn;
  const p = req.query.p;

  if (!pn || !p || p == 0 || pn == 0) {
    res.json(viewWrongRequest());
    return;
  }

  const txs = await parseSpecificTxs(p, pn);
  if (txs.length == 0) {
    res.json(viewNotFoundData());
    return;
  }

  const totalTx = await getTotalTxs();

  res.json(viewTxs(txs, totalTx));
};

const controllerTxDetail = async (req, res, next) => {
  txHash = req.params.txHash;

  const txHashInfo = await parseTxHashInfo(txHash);
  // 요청한 데이터가 없는 경우 404
  if (Object.keys(txHashInfo).length === 0 && JSON.stringify(txHashInfo) === JSON.stringify({})) {
    res.json(viewNotFoundData());
    return;
  }

  res.json(viewTxInfo(txHashInfo));
};

module.exports = {
  controllerTxs,
  controllerTxDetail,
};
