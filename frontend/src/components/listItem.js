export default function ListItem({ movie }) {
  return (
    <div className="item">
      <img src={movie.imageURL} alt={movie.name}></img>
      <div className="item-property">
        {movie.name}
        <button>Details</button>
      </div>
    </div>
  );
}
