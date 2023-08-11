import { useContext } from "react";
import { ListContext } from "../listContext";

export default function SearchBar() {
  const context = useContext(ListContext);

  function fetchMovies() {
    if (!context.movies) {
      fetch("http://localhost:3000/movies/?page=1", {
        headers: {
          "Content-Type": "application/json",
        },
      }).then((movies) => {
        movies.json().then(({ movies }) => {
          context.setFilteredMovies(movies);
        });
      });
    }
  }

  function filterMovies(e) {
    const searchTerm = e.target.value.toLowerCase();
    context.setInput(searchTerm);
    fetch("http://localhost:3000/movies/find/?regex=" + searchTerm, {
      headers: {
        "Content-Type": "application/json",
      },
    }).then((movies) =>
      movies.json().then(({ movies }) => {
        context.setFilteredMovies(movies);
      })
    );
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
