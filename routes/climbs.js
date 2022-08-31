var express = require('express');
var router = express.Router();
var climbsCtrl = require('../controllers/climbs')

router.get('/new', climbsCtrl.new);
router.get('/:id', climbsCtrl.show);
router.get('/:id/edit', climbsCtrl.edit);
router.post('/new', climbsCtrl.create);
router.delete('/:id', climbsCtrl.delete);
router.put('/:id', climbsCtrl.update);

module.exports = router;