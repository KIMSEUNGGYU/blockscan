const router = require('express').Router();
const { controllerBlock } = require('../controllers/block');
router.get('/:blockNumber', controllerBlock);

module.exports = router;
