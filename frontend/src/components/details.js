import { useContext } from "react";
import { ListContext } from "../listContext";

export default function Details() {
  const context = useContext(ListContext);
  return (
    <>
      {context.details && (
        <div id="details">
          <img
            src={context.detailMovie.imageURL}
            alt={context.detailMovie.original_title}
          ></img>
          <h1>{context.detailMovie.original_title}</h1>
        </div>
      )}
    </>
  );
}
