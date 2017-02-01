var express = require('express');
var router = express.Router();
var models = require('../db/models/index');



// New director
router.get('/new', function(req, res, next) {
  res.render('directors/new', { title: 'new director', navClass: 'red darken-4', currentRoute: 'directors' });
});

router.get('/', function(req, res, next) {
  models.Director.findAll({}).then(function(directors) {
    res.render('directors/index', {
      title: 'directors',
      directors: directors,
      navClass: 'red darken-4',
      currentRoute: 'directors'
    });
  });
});

//Posts data from input form to database
router.post('/', function(req, res, next) {
  models.Director.create({
    name: req.body.fullName,
  }).then(function() {
    res.redirect('/directors')
  });
});

//route to specify what happens on press of delete submit button
router.delete('/:id', function(req, res, next) {
  models.Director.destroy({
    where: { id: req.params.id }
  }).then(function(director) {
    res.redirect('/directors');
  });
});


//routes user to full director profile info on click of Director Name link on main page
router.get('/:id', function(req, res, next) {
  models.Director.findById(req.params.id).then(function(director) {
    res.render('directors/show', { director: director, title: director.name, navClass: 'red darken-4', currentRoute: 'directors' });
  });
});

//routes to edit view with input fields prepopulated with previously inputted information
router.get('/:id/edit', function(req, res, next) {
  models.Director.findById(req.params.id).then(function(director) {
    res.render('directors/edit', { director: director, navClass: 'red darken-4', currentRoute: 'directors' });
  });
});

//this function handles what happens on submit of editing director information
router.put('/:id', function(req, res, next) {
  models.Director.update({
  name:req.body.fullName
  }, { where: { id: req.params.id } }).then(function() {
    res.redirect('/directors/');
  });
});


module.exports = router;
