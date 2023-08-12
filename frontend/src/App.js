import "./App.css";
import ListProvider from "./listContext";
import ListPage from "./pages/listPage";

export default function App() {
  return (
    <ListProvider>
      <ListPage />
    </ListProvider>
  );
}
