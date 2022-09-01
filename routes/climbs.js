var express = require('express');
var router = express.Router();
var climbsCtrl = require('../controllers/climbs')
var multer = require('multer');
var upload = multer({dest:'uploads'});

router.get('/new', climbsCtrl.new);
router.get('/:id', climbsCtrl.show);
router.get('/:id/edit', climbsCtrl.edit);
// router.post('/new', upload.single('image'), climbsCtrl.create);
router.post('/new', climbsCtrl.create);
router.delete('/:id', climbsCtrl.delete);
router.put('/:id', climbsCtrl.update);

module.exports = router;