import { useContext } from "react";
import { ListContext } from "../../listContext";

export default function ListItem({ movie }) {
  const context = useContext(ListContext);

  function showDetails() {
    if (!context.details) {
      context.setDetails(true);
      context.setDetailMovie(movie);
    } else {
      if (context.detailMovie !== movie) {
        context.setDetailMovie(movie);
      } else {
        context.setDetails(false);
        context.setDetailMovie(null);
      }
    }
  }

  function removeFromList() {
    const newList = [...context.list];
    const indexToRemove = context.list.indexOf(movie);
    newList.splice(indexToRemove, 1);
    context.setList(newList);
  }

  return (
    <div className="item">
      <section className="item-index">
        <h3>{context.list.indexOf(movie) + 1}</h3>
      </section>
      <div className="item-property">
        <div className="item-info">
          <img src={movie.imageURL} alt={movie.original_title}></img>
          <p>{movie.original_title}</p>
        </div>
        <section className="item-details">
          <button onClick={showDetails}>Details</button>
        </section>
      </div>
      <div className="item-remove">
        <button onClick={removeFromList}>X</button>
      </div>
    </div>
  );
}
