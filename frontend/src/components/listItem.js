export default function ListItem({ movie }) {
  return (
    <div className="item">
      <img src={movie.imageURL} alt={movie.original_title}></img>
      <div className="item-property">
        {movie.original_title}
        <button>Details</button>
      </div>
    </div>
  );
}
