var express = require('express');
var router = express.Router();
var climbsCtrl = require('../controllers/climbs')

router.get('/new', climbsCtrl.new);
router.get('/:id', climbsCtrl.show);
router.post('/new', climbsCtrl.create);
router.delete('/:id', climbsCtrl.delete);

module.exports = router;