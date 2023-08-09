import { useContext } from "react";
import { ListContext } from "../listContext";

export default function SearchItem({ movie }) {
  const context = useContext(ListContext);

  function addToList() {
    if (!context.list.includes(movie)) {
      const newList = [...context.list, movie];
      context.setList(newList);
    }
  }

  return (
    <div className="filter-item" onClick={addToList}>
      <img src={movie.imageURL} alt={movie.original_title}></img>
      {movie.original_title}
    </div>
  );
}
