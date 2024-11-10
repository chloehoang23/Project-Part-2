var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Home' });
});

/* GET home page. */
router.get('/home', function(req, res, next) {
  res.render('index', { title: 'Home' }); // Change 'index' to name of ejs applied
});

/* GET contact page. */
router.get('/contact', function(req, res, next) {
  res.render('index', { title: 'Contact Us' });
});

module.exports = router;