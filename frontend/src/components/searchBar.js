import { useState } from "react";

export default function SearchBar() {
  const [input, setInput] = useState("");
  return (
    <div id="filter">
      <input
        type="text"
        placeholder="Search the movie you want to add"
        value={input}
      />
      <div></div>
    </div>
  );
}
