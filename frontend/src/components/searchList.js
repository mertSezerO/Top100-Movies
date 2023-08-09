import { useContext } from "react";
import { ListContext } from "../listContext";
import SearchItem from "./searchItem";

export default function SearchList() {
  const context = useContext(ListContext);
  return (
    //pagination will be added.
    <div id="filter-item-container">
      {context.filteredMovies?.map((movie) => (
        <SearchItem movie={movie} key={movie.id} />
      ))}
    </div>
  );
}
