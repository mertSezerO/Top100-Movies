const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const movieSchema = new Schema({
  genres: {
    type: Array,
  },
  id: {
    type: Number,
  },
  keywords: {
    type: Array,
  },
  original_language: {
    type: String,
  },
  original_title: {
    type: String,
  },
  popularity: {
    type: Number,
  },
  release_date: {
    type: Date,
  },
  spoken_languages: {
    type: Array,
  },
  title: {
    type: String,
  },
  vote_average: {
    type: Number,
  },
});

module.exports = mongoose.model("Movie", movieSchema);
