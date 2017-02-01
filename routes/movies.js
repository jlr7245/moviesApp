var express = require('express');
var router = express.Router();
var models = require('../db/models/index');


/* GET movies listing. */
router.get('/', function(req, res, next) {
  models.Movie.findAll({}).then(function(movie) {
    res.render('movies/index', {
      title: 'movie',
      movies: movie,
      navClass: 'red darken-4',
      currentRoute: 'movies'
    });
  });
});

/* Add a Movie */
router.get('/add', function(req, res, next) {
  res.render('movies/add', {navClass: 'red darken-4'});
});

router.post('/', function(req, res, next) {
  models.Movie.create({
    title: req.body.title,
    synopsis: req.body.synopsis
  }).then(function() {
    res.redirect('/movies');
  });
});

/* GET movies ID. */
router.get('/:id', function(req, res, next) {
  models.Movie.findById(req.params.id).then(function(movie) {
    res.render('movies/show', {
      movie: movie,
      title: 'movie',
      snyopsis: 'synopsis',
      navClass: 'red darken-4',
      currentRoute: 'movies'
    });
  });
});

/* EDIT movies */
router.get('/:id/edit', function(req, res, next) {
  models.Movie.findById(req.params.id).then(function(movie) {
    res.render('movies/edit', {
      movie: movie,
      navClass: 'red darken-4',
      currentRoute: 'movies'
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

/*  DELETE movies */
router.delete('/:id', function(req, res, next) {
  models.Movie.destroy({
    where: { id: req.params.id }
  }).then(function(movie) {
    res.redirect('/movies');
  });
});


module.exports = router;

