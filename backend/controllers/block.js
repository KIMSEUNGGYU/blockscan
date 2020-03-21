const { viewBlock } = require('../views/block');
const { viewNotFoundData, viewBadRequest } = require('../views/error');
const { parseBlock } = require('../services/block');
const { intToHex } = require('../helper/translate');

const controllerBlock = async (req, res, next) => {
  const number = parseInt(req.params.blockNumber);

  // 잘못된 요청 - 400
  if (!number) {
    res.json(viewBadRequest());
    return;
  }
  const block = await parseBlock(intToHex(number));

  // 요청한 데이터가 없는 경우 404
  if (Object.keys(block).length === 0 && JSON.stringify(block) === JSON.stringify({})) {
    res.json(viewNotFoundData());
    return;
  }

  // 정상적인 처리
  res.json(viewBlock(block));
};

module.exports = {
  controllerBlock,
};
