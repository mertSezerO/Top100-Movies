import { useContext } from "react";
import { ListContext } from "../listContext";

export default function SearchBar() {
  const context = useContext(ListContext);

  //Delay issue will be handled.
  function fetchMovies() {
    if (!context.movies) {
      fetch("http://localhost:3000/movies/?page=1", {
        headers: {
          "Content-Type": "application/json",
        },
      }).then((movies) => {
        movies.json().then(({ movies }) => {
          context.setMovies(movies);
          context.setFilteredMovies(movies);
        });
      });
    }
  }

  function filterMovies(e) {
    const searchTerm = e.target.value.toLowerCase();
    const filteredMovies = context.movies
      ?.filter((movie) =>
        movie.original_title.toLowerCase().includes(searchTerm)
      )
      .slice(0, 10);

    context.setInput(searchTerm);
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
