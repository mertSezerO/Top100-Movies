const Movie = require("../models/movie");

exports.getMovies = (req, res, next) => {
  Movie.find(req.query)
    .then((movies) => {
      res.status(200).json({
        movies: movies,
      });
    })
    .catch((err) => {
      console.log(err);
    });
};
