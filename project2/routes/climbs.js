var express = require('express');
var router = express.Router();
var climbsCtrl = require('../controllers/climbs')

router.get('/new', climbsCtrl.new);

module.exports = router;