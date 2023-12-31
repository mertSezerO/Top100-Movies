import { createContext, useState } from "react";
import Cookies from "universal-cookie";

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
  const cookie = new Cookies({ path: "/" });

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
    cookie,
  };

  return <ListContext.Provider value={state}>{children}</ListContext.Provider>;
}

export { ListContext };
