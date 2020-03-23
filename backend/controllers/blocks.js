const { parseBlockList, getTotalBlocks } = require('../services/blocks');
const { viewBlocks } = require('../views/blocks');
const { viewWrongRequest, viewNotFoundData } = require('../views/error');

const controllerBlocks = async (req, res, next) => {
  const pn = req.query.pn;
  const p = req.query.p;

  // 허용되지 않는 방법 405
  if (!pn || !p) {
    res.json(viewWrongRequest());
    return;
  }

  const blocks = await parseBlockList(pn, p);
  // const totalBlocks = await getTotalBlock();
  // 찾을수 없음(데이터) 404
  if (!blocks.length) {
    res.json(viewNotFoundData());
    return;
  }

  const totalBlock = await getTotalBlocks();

  console.log(totalBlock);
  // 정상적인 처리
  res.json(viewBlocks(blocks, totalBlock));
};

module.exports = {
  controllerBlocks,
};
