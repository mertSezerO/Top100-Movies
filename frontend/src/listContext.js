import { createContext, useState } from "react";

const ListContext = createContext();

export default function ListProvider({ children }) {
  const [list, setList] = useState([]);
  const [movies, setMovies] = useState();
  const [input, setInput] = useState("");
  const [filteredMovies, setFilteredMovies] = useState();
  const [details, setDetails] = useState(false);
  const [detailMovie, setDetailMovie] = useState();

  const state = {
    list,
    setList,
    movies,
    setMovies,
    input,
    setInput,
    filteredMovies,
    setFilteredMovies,
    details,
    setDetails,
    detailMovie,
    setDetailMovie,
  };

  return <ListContext.Provider value={state}>{children}</ListContext.Provider>;
}

export { ListContext };
