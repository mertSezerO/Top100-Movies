import { useContext } from "react";
import { ListContext } from "../listContext";
import PageItem from "./pageItem";

export default function PageList() {
  const context = useContext(ListContext);

  return (
    <div id="divider-container">
      <div className="divider">
        <PageItem index={1} />
      </div>
      {context.currentPage !== 1 && (
        <div className="divider">
          <PageItem index={"prev"} />
        </div>
      )}
      {context.currentPage !== 1 && context.currentPage !== 481 && (
        <div className="divider" id="current">
          <PageItem index={context.currentPage} />
        </div>
      )}
      {context.currentPage !== 481 && (
        <div className="divider">
          <PageItem index={"next"} />
        </div>
      )}
      <div className="divider">
        <PageItem index={481} />
      </div>
    </div>
  );
}
