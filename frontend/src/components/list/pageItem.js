import { useContext } from "react";
import { ListContext } from "../../listContext";

export default function PageItem({ index }) {
  const context = useContext(ListContext);

  function renderPage() {
    if (context.currentPage === index) return;
    else {
      let nextIndex;
      if (typeof index == "string") {
        nextIndex = index === "prev" ? -1 : 1;
        nextIndex = context.currentPage + nextIndex;
      } else {
        nextIndex = index;
      }
      context.setCurrentPage(nextIndex);
      fetch("http://localhost:3000/movies/?page=" + nextIndex, {
        headers: {
          "Content-Type": "application/json",
        },
      }).then((movies) => {
        movies.json().then(({ movies }) => {
          context.setFilteredMovies(movies);
        });
      });
    }
  }

  return <button onClick={renderPage}>{index}</button>;
}
