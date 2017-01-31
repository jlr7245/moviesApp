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


/* GET movies ID. */
router.get('/:id', function(req, res, next) {
  models.Movie.findById(req.params.id).then(function(movie) {
    res.render('movies/show', {
      movie: movie,
      title: 'title',
      snyopsis: 'synopsis'

    });
  });
});


module.exports = router;

