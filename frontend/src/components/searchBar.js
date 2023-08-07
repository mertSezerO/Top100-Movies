import { useContext } from "react";
import ListContext from "../listContext";

export default function SearchBar() {
  const context = useContext(ListContext);

  return (
    <div id="filter">
      <input
        type="text"
        placeholder="Search the movie you want to add"
        value={context.input}
      />
      <div></div>
    </div>
  );
}
