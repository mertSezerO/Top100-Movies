const Movie = require("../models/movie");

exports.getMovies = (req, res, next) => {
  const { page } = req.query;
  Movie.find()
    .skip((page - 1) * process.env.ITEMS_PER_PAGE)
    .limit(process.env.ITEMS_PER_PAGE)
    .then((movies) => {
      res.status(200).json({ movies: movies });
    })
    .catch((err) => {
      console.log(err);
    });
};
