import { useContext } from "react";
import { ListContext } from "../../listContext";

export default function Details() {
  const context = useContext(ListContext);
  const detailMovie = context.detailMovie;
  const formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  });

  return (
    <>
      {context.details && (
        <div id="details">
          <div id="detail-container">
            <img
              src={detailMovie.imageURL}
              alt={detailMovie.original_title}
            ></img>
            <h1>{detailMovie.original_title}</h1>
            <ul>
              {detailMovie.genres.map((genre, index) => (
                <li key={index}>{genre.name}</li>
              ))}
            </ul>
            <p>{detailMovie.overview}</p>
            <div id="stats">
              <p>Avrg: {detailMovie.vote_average}/10</p>
              <p>Popularity: {parseInt(detailMovie.popularity)}</p>
              <p>Runtime: {detailMovie.runtime} min</p>
            </div>
            <div id="production">
              <p>
                Production Countries:
                {detailMovie.production_countries
                  .map((country) => country.name)
                  .join(", ")}
              </p>
              <p>
                Production Companies:
                {detailMovie.production_companies
                  .map((country) => country.name)
                  .join(", ")}
              </p>
              <p>Release Date: {detailMovie.release_date.substring(0, 10)}</p>
            </div>
            <div>
              <p>Budget: {formatter.format(detailMovie.budget)}</p>
              <p>Revenue: {formatter.format(detailMovie.revenue)}</p>
            </div>
            <p>
              Spoken Languages:
              {detailMovie.spoken_languages
                .map((language) => language.name)
                .join(", ")}
            </p>
          </div>
        </div>
      )}
    </>
  );
}
