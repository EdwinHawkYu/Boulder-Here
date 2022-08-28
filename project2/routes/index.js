var express = require('express');
var router = express.Router();
var climbsCtrl = require('../controllers/climbs')
const passport = require('passport');

/* Google Oauth Login Route */
router.get('/auth/google', passport.authenticate(
  'google',
  {scope: ['profile','email']}
));

/* Google Oauth callback route */
router.get('/oauth2callback', passport.authenticate(
  'google',
  {
    successRedirect: '/climbs',
    failureRedirect: '/home'
  }
));

// Oauth logout route
router.get('/logout', function(req, res){
  req.logout(function(err){
    if(err){return next(err);}
    res.redirect('/home');
  });
});

/* GET home page. */
router.get('/', function(req, res, next) {
  res.redirect('home')
});

router.get('/climbs', climbsCtrl.index);
router.get('/new', climbsCtrl.new);

module.exports = router;