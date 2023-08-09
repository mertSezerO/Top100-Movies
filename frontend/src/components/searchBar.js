import { useContext } from "react";
import { ListContext } from "../listContext";

export default function SearchBar() {
  const context = useContext(ListContext);
  let fetchedMovies;

  function fetchMovies() {
    if (!context.movies) {
      fetch("http://localhost:3000/movies", {
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((movies) => {
          fetchedMovies = movies.json();
        })
        .then(() => {
          context.setMovies(fetchedMovies);
        });
    }
  }

  function filterMovies() {
    const filteredMovies = context.movies.filter(
      (movie) => {
        if (
          this.count < 10 &&
          movie.original_title.match(context.input.toLowerCase())
        ) {
          this.count++;
          return true;
        }
        return false;
      },
      { count: 0 }
    );
    context.setFilteredMovies(filteredMovies);
  }

  return (
    <div id="filter">
      <input
        type="text"
        placeholder="Search the movie you want to add"
        onFocus={fetchMovies}
        // value={context.input}
        // onChange={filterMovies}
      />
      <div></div>
    </div>
  );
}
