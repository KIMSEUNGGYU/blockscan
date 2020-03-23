const express = require('express');
const router = express.Router();
const { controllerTxs, controllerTxDetail } = require('../controllers/txs')
router.get('/', controllerTxs);
router.get('/:txHash', controllerTxDetail);
module.exports = router;
