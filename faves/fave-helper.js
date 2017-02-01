const models = require('../db/models/index');

function getFavorites(req,res,next) {
  models.sequelize.query('SELECT "Movies"."title", "Movies"."id", "Favorites"."createdAt" FROM "Movies" JOIN "Favorites" ON "Favorites"."movieId" = "Movies"."id" JOIN "Users" ON "Favorites"."userId" = "Users"."id" WHERE "Users"."id" = :id', {
    replacements: { id: req.user.id },
    type: models.sequelize.QueryTypes.SELECT
  }).then((faves) => {
    res.faves = faves;
    return next();
  });
}

module.exports = getFavorites;