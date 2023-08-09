import { useContext } from "react";
import { ListContext } from "../listContext";

export default function ListItem({ movie }) {
  const context = useContext(ListContext);

  function showDetails() {}

  function removeFromList() {
    const newList = [...context.list];
    const indexToRemove = context.list.indexOf(movie);
    newList.splice(indexToRemove, 1);
    context.setList(newList);
  }

  return (
    <div className="item">
      <section className="remove">
        <button onClick={removeFromList}>X</button>
      </section>
      <div className="item-property">
        <img src={movie.imageURL} alt={movie.original_title}></img>
        {movie.original_title}
      </div>
      <section className="details">
        <button onClick={showDetails}>Details</button>
      </section>
    </div>
  );
}
