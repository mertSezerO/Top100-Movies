import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "../components/auth/login";
import Register from "../components/auth/register";
import Layout from "../components/auth/layout";

export default function AuthPage() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Route>
    </Routes>
  );
}
