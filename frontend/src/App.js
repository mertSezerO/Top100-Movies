import "./App.css";
import ListProvider from "./listContext";
import AuthPage from "./pages/authPage";
import ListPage from "./pages/listPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";

export default function App() {
  return (
    <ListProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<ListPage />} />
          <Route path="/auth/*" element={<AuthPage />} />
        </Routes>
      </BrowserRouter>
    </ListProvider>
  );
}
