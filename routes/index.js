var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});
router.get('/index.html', function(req, res, next) {
  res.render('index');
});

router.get('/women.html', function(req, res, next) {
  res.render('women');
});
router.get('/buy.html', function(req, res, next) {
  res.render('buy');
});
router.get('/contact.html', function(req, res, next) {
  res.render('contact');
});
router.get('/brands.html', function(req, res, next) {
  res.render('brands');
});
router.get('/details.html', function(req, res, next) {
  res.render('details');
});
router.get('/registration.html', function(req, res, next) {
  res.render('registration');
});
router.get('/men.html', function(req, res, next) {
  res.render('women');
});
router.get('/kid.html', function(req, res, next) {
  res.render('women');
});
router.get('/collection.html', function(req, res, next) {
  res.render('women');
});

module.exports = router;
