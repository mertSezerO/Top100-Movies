const Movie = require("../models/movie");

exports.getMoviesPage = (req, res, next) => {
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

exports.getFilteredMovies = (req, res, next) => {
  const { regex } = req.query;
  Movie.find({ original_title: { $regex: new RegExp(regex, "i") } })
    .limit(process.env.ITEMS_PER_PAGE)
    .then((movies) => {
      res.status(200).json({ movies: movies });
    })
    .catch((err) => {
      console.log(err);
    });
};
