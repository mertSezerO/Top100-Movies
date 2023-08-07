import ListItem from "./listItem";
import { useContext } from "react";
import { ListContext } from "../listContext";
import axios from "axios";

export default function List() {
  const response = axios.get("http://localhost:3000/movies");
  const data = JSON.stringify(response);

  return (
    <div>
      <h1>SNJAKSL</h1>
      <h1>{response.id}</h1>
    </div>
  );

  // const context = useContext(ListContext);
  // return (
  //   <div id="item-list">
  //     {context.list.map((item) => (
  //       <ListItem movie={item} />
  //     ))}
  //   </div>
  // );
}
