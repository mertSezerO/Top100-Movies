import Details from "../components/list/details";
import List from "../components/list/list";
import Search from "../components/list/search";

export default function ListPage() {
  return (
    <div id="app">
      <Search />
      <List />
      <Details />
    </div>
  );
}
