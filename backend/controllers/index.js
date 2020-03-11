const express = require('express');
const router = express.Router();
const { parseBlocks, parseTxs } = require('../services/index');

/* GET home page. */
router.get('/', async function(req, res, next) {
  const blocks = await parseBlocks();
  const txs = await parseTxs();

  res.json({
    code: 200,
    status: 'success',
    message: 'main page response : List of 10 transactions and blocks',
    result: {
      blocks,
      txs,
    },
  });
});

module.exports = router;
