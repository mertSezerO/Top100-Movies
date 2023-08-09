import ListItem from "./listItem";
import { useContext } from "react";
import { ListContext } from "../listContext";

export default function List() {
  const context = useContext(ListContext);
  return (
    <div id="item-list">
      {context.list.map((item) => (
        <ListItem movie={item} key={item._id} />
      ))}
    </div>
  );
}
