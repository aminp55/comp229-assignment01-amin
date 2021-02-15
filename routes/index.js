let express = require('express');
let router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Home' });
});
router.get('/home', function (req, res, next) {
  res.render('index', { title: 'Home' });
});


/* GET about page. */
router.get('/about', function (req, res, next) {
  res.render('about', { title: 'About' });
});

/* GET contact page. */
router.get('/contact', function (req, res, next) {
  res.render('contact', { title: 'Contact' });
});

/* GET services page. */
router.get('/services', function (req, res, next) {
  res.render('services', { title: 'Services' });
});

/* GET products page. */
router.get('/products', function (req, res, next) {
  res.render('products', { title: 'Products' });
});

module.exports = router;
