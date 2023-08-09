import "./App.css";
import Details from "./components/details";
import List from "./components/list";
import Search from "./components/search";
import ListProvider from "./listContext";

export default function App() {
  return (
    <ListProvider>
      <div id="app">
        <Search />
        <List />
        <Details />
      </div>
    </ListProvider>
  );
}
