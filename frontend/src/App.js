import "./App.css";
import List from "./components/list";
import SearchBar from "./components/searchBar";
import ListProvider from "./listContext";

export default function App() {
  return (
    <ListProvider>
      <div id="app">
        <SearchBar />
        <List />
      </div>
    </ListProvider>
  );
}
