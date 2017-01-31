var express = require('express');
var router = express.Router();
var models = require('../db/models/index');


/* GET movies listing. */
router.get('/', function(req, res, next) {
  models.Movie.findAll({}).then(function(movie) {
    res.render('movies/index', {
      title: 'title',
      movies: movie
    })
  })
});

module.exports = router;

