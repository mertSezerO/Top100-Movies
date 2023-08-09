export default function SearchItem({ movie }) {
  return (
    <div className="filter-item">
      <img src={movie.imageURL} alt={movie.original_title}></img>
      <div className="filter-item-property">{movie.original_title}</div>
    </div>
  );
}
