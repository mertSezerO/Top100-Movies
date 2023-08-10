import { ListContext } from "../listContext";
import SearchItem from "./searchItem";

import { useContext } from "react";

export default function SearchList() {
  const context = useContext(ListContext);
  return (
    <div id="filter-item-container">
      {context.filteredMovies &&
        context.filteredMovies.map((movie) => (
          <SearchItem movie={movie} key={movie.id} />
        ))}
    </div>
  );
}
