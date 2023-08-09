export default function ListItem({ movie }) {
  return (
    <div className="item">
      <div className="item-property">
        <img src={movie.imageURL} alt={movie.original_title}></img>
        {movie.original_title}
      </div>
      <section className="details">
        <button>Details</button>
      </section>
    </div>
  );
}
