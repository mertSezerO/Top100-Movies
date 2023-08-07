const Movie = require("../models/movie");

exports.getMovies = (req, res, next) => {
  Movie.find()
    .then((movies) => {
      res.status(200).json({ movies });
    })
    .catch((err) => {
      console.log(err);
    });
};
