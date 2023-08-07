import { createContext, useState } from "react";

const ListContext = createContext();

export default function ListProvider({ children }) {
  const [list, setList] = useState([]);
  const [searchInput, setSearchInput] = useState("");

  const state = {
    list,
    setList,
    searchInput,
    setSearchInput,
  };

  return <ListContext.Provider value={state}>{children}</ListContext.Provider>;
}

export { ListContext };
