import { createContext, useState } from "react";
const ListContext = createContext();

export default function ListProvider({ children }) {
  const [list, setList] = useState([]);
  const [input, setInput] = useState("");
  const [filteredMovies, setFilteredMovies] = useState();
  const [details, setDetails] = useState(false);
  const [detailMovie, setDetailMovie] = useState();
  const [currentPage, setCurrentPage] = useState(1);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const state = {
    list,
    setList,
    input,
    setInput,
    filteredMovies,
    setFilteredMovies,
    details,
    setDetails,
    detailMovie,
    setDetailMovie,
    currentPage,
    setCurrentPage,
    email,
    setEmail,
    password,
    setPassword,
  };

  return <ListContext.Provider value={state}>{children}</ListContext.Provider>;
}

export { ListContext };
