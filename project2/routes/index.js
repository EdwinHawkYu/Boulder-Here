var express = require('express');
var router = express.Router();
var climbsCtrl = require('../controllers/climbs')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.redirect('home')
});

router.get('/climbs', climbsCtrl.index)

module.exports = router;
