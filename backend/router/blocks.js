const express = require('express');
const router = express.Router();
const { controllerBlocks } = require('../controllers/blocks');
router.get('/', controllerBlocks);

module.exports = router;
