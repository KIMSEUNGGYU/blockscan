const express = require('express');
const router = express.Router();
const { controllerTxs } = require('../controllers/txs')
router.get('/', controllerTxs);

module.exports = router;
