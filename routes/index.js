var express = require('express');
var router = express.Router();

// Each route handles a GET request and renders an EJS view.
// The second argument to res.render() is the "locals" object: data the view can use.

router.get('/', function (req, res, next) {
  res.render('index', { title: 'Home' });
});

router.get('/about', function (req, res, next) {
  res.render('about', { title: 'About Me' });
});

router.get('/projects', function (req, res, next) {
  res.render('projects', { title: 'Projects' });
});

router.get('/contact', function (req, res, next) {
  res.render('contact', { title: 'Contact Me' });
});

module.exports = router;
