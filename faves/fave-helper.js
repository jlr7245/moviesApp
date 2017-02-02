const models = require('../db/models/index'); // importing the model

function getFavorites(req,res,next) {
  models.sequelize.query('SELECT "Movies"."title", "Movies"."id", "Favorites"."createdAt" FROM "Movies" JOIN "Favorites" ON "Favorites"."movieId" = "Movies"."id" JOIN "Users" ON "Favorites"."userId" = "Users"."id" WHERE "Users"."id" = :id', {
    replacements: { id: req.user.id }, /// replaces :id in the query
    type: models.sequelize.QueryTypes.SELECT // don't need metadata in the response
  }).then((faves) => {
    res.locals.faves = faves; // setting res.locals object to access in the response
    return next(); // next function
  });
}

module.exports = getFavorites; // exporting the function