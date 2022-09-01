var express = require('express');
var router = express.Router();
var reviewsCtrl = require('../controllers/reviews');

router.post('/:id/reviews', reviewsCtrl.create);
router.delete('/:id', reviewsCtrl.delete);

module.exports = router;