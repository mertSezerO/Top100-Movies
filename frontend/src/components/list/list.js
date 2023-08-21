import ListItem from "./listItem";
import { useContext } from "react";
import { ListContext } from "../../listContext";

export default function List() {
  const context = useContext(ListContext);

  async function saveList() {
    console.log(context.list);
    await fetch("http://localhost:3000/users", {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        movieList: context.list,
        token: context.cookie.get("token"),
      }),
    });
  }

  return (
    <div id="item-list">
      <h2>My Top100 Movies</h2>
      {context.list.map((item) => (
        <ListItem key={item._id} movie={item} />
      ))}
      <section>
        <button onClick={saveList}>Save</button>
      </section>
    </div>
  );
}
