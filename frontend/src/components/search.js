import Pages from "./pageList.js";
import SearchBar from "./searchBar";
import SearchList from "./searchList";

export default function Search() {
  return (
    <div id="search">
      <SearchBar />
      <SearchList />
      <Pages />
    </div>
  );
}
