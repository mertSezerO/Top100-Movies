import ListItem from "./listItem";
import { useContext } from "react";
import { ListContext } from "../../listContext";
import axios from "axios";

export default function List() {
  const context = useContext(ListContext);

  async function saveList() {
    console.log(context.user);
    const updatedUser = {
      _id: context.user._id,
      username: context.user.username,
      email: context.user.email,
      password: context.user.password,
      movieList: context.list,
    };
    await axios.put("http://localhost:3000/users", updatedUser);
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
