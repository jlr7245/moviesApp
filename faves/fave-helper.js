const models = require('../db/models/index');

function getFavorites(req,res,next) {
  models.sequelize.query('SELECT "Movies"."title" FROM "Movies" JOIN "Favorites" ON "Favorites"."movieId" = "Movies"."id" JOIN "Users" ON "Favorites"."userId" = "Users"."id" WHERE "Users"."id" = :id', {
    replacements: { id: req.user.id }
  }).spread((faves, meta) => console.log("here are the faves" + faves + "here is the meta" + meta));
  return next();
}

module.exports = getFavorites;