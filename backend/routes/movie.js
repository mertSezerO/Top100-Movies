const express = require("express");
const Router = express.Router();

const movieController = require("../controllers/movie");

Router.get("/movies", movieController.getMovies);

module.exports = Router;
