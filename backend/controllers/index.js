const { parseBlocks, parseTxs } = require('../services/index');
const { viewIndex } = require('../views/index');
/* GET home page. */

const controllerIndex = async (req, res, next) => {
  const blocks = await parseBlocks();
  const txs = await parseTxs(); // 컨트롤

  // view
  res.json(viewIndex(blocks, txs));
};

module.exports = {
  controllerIndex,
};
