import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import Search from "../components/list/search";
import List from "../components/list/list";
import Details from "../components/list/details";

export default function ListPage() {
  const navigate = useNavigate();

  useEffect(() => {
    // Token kontrolü yap
    const token = localStorage.getItem("token");
    if (!token) {
      navigate("/auth"); // Token yoksa /auth sayfasına yönlendir
    }
  }, []);

  return (
    <div id="app">
      <Search />
      <List />
      <Details />
    </div>
  );
}
