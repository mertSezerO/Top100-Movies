import "./App.css";
import ListProvider from "./listContext";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ListPage from "./pages/listPage";

export default function App() {
  return (
    <ListProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<ListPage />}></Route>
        </Routes>
      </BrowserRouter>
    </ListProvider>
  );
}
