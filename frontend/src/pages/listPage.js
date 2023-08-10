import Details from "../components/details";
import List from "../components/list";
import Search from "../components/search";

export default function ListPage() {
  return (
    <div id="app">
      <Search />
      <List />
      <Details />
    </div>
  );
}
