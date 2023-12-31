import React, { useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { ListContext } from "../listContext";

import Search from "../components/list/search";
import List from "../components/list/list";
import Details from "../components/list/details";

export default function ListPage() {
  const navigate = useNavigate();
  const context = useContext(ListContext);

  useEffect(() => {
    const token = context.cookie.get("token");
    if (!token) {
      navigate("/auth");
    }
    fetch("http://localhost:3000/users/list", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + token,
      },
    }).then((res) => {
      res.json().then((res) => {
        const movieList = res.movieList;
        context.setList(movieList);
      });
    });
  }, [navigate]);

  return (
    <div id="app">
      <Search />
      <List />
      <Details />
    </div>
  );
}
