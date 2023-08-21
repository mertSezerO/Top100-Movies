import "./App.css";
import ListProvider from "./listContext";
import ListPage from "./pages/listPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CookiesProvider } from "react-cookie";

import Layout from "./components/auth/layout";
import Login from "./pages/loginPage";
import Register from "./pages/registerPage";

export default function App() {
  return (
    <ListProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<ListPage />} />
          <Route path="/auth" element={<Layout />}>
            <Route index element={<Login />} />
            <Route path="register" element={<Register />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </ListProvider>
  );
}
