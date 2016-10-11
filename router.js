var express = require('express');
var router = express.Router();
var getFlixController = require('./getFlixController');

router.use('/', getFlixController.GET);

module.exports = router;
