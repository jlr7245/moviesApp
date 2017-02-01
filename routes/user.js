var express = require('express');
var router = express.Router();
var authHelpers = require('../auth/auth-helpers');
const favHelper = require('../faves/fave-helper');

/* GET users listing. */


router.get('/', authHelpers.loginRequired, favHelper, (req,res,next) => {
  res.render('user/index', {
    user: req.user.dataValues,
    faves: res.faves,
    title: 'user',
    navClass: 'red darken-4',
    currentRoute: 'user'
  });
});

router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

module.exports = router;
