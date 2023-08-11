const express = require("express");
const Router = express.Router();

const movieController = require("../controllers/movie");

Router.get("/movies", movieController.getMoviesPage);

Router.get("/movies/find", movieController.getFilteredMovies);

module.exports = Router;
