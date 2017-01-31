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

/* EDIT movies */
router.get('/:id/edit', function(req, res, next) {
  models.Movie.findById(req.params.id).then(function(movie) {
    res.render('movies/edit', {
      movie: movie
    });
  });
});

router.put('/:id', function(req, res, next) {
  models.Movie.update({
    title: req.body.title,
    synopsis: req.body.synopsis
  }, { where: { id: req.params.id }
  }).then(function() {
    res.redirect('/movies/' + req.params.id);
  });
});


router.delete('/:id', function(req, res, next) {
  models.Movie.destroy({
    where: { id: req.params.id }
  }).then(function(movie) {
    res.redirect('/movies')
  });
});

module.exports = router;

