import ListItem from "./listItem";
import { useContext } from "react";
import { ListContext } from "../../listContext";

export default function List() {
  const context = useContext(ListContext);

  return (
    <div id="item-list">
      <h2>My Top100 Movies</h2>
      {context.list.map((item) => (
        <ListItem key={item._id} movie={item} />
      ))}
    </div>
  );
}
