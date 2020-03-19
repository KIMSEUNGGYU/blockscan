const express = require('express');
const router = express.Router();
const { controllerIndex } = require('../controllers/index');

router.get('/', controllerIndex);

module.exports = router;
