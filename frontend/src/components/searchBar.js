import { useContext } from "react";
import { ListContext } from "../listContext";

export default function SearchBar() {
  const context = useContext(ListContext);
  function fetchMovies() {
    if (!context.movies) {
      fetch("http://localhost:3000/movies", {
        headers: {
          "Content-Type": "application/json",
        },
      }).then((movies) => {
        movies.json().then(({ movies }) => {
          context.setMovies(movies);
        });
      });
    }
  }

  function filterMovies(e) {
    let count = 0;
    const filteredMovies = context.movies?.filter((movie) => {
      if (
        count < 10 &&
        movie.original_title.match(e.target.value?.toLowerCase())
      ) {
        count++;
        return true;
      }
      return false;
    });
    console.log(e.target.value);
    console.log(filteredMovies);
    context.setInput(e.target.value);
    context.setFilteredMovies(filteredMovies);
  }

  return (
    <div id="filter">
      <input
        type="text"
        placeholder="Search the movie you want to add"
        onFocus={fetchMovies}
        value={context.input}
        onChange={filterMovies}
      />
    </div>
  );
}
