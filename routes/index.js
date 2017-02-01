var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'home', navClass: 'transparent', currentRoute: 'home' });
});

module.exports = router;
