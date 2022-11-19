import { useRef } from "react";
import useContextMenu from "../hooks/useContextMenu";

import StoredResume from "../components/StoredResume";
import ContextMenu from "../components/ContextMenu";

const StoredResumes = () => {
  const allResumes = JSON.parse(localStorage.getItem("all_resumes"));

  const listRef = useRef();
  const menuRef = useRef();

  const { contextCords, contextText, showContextMenu, setShowContextMenu } =
    useContextMenu(listRef, menuRef);

  return (
    <div className="sr">
      <ul ref={listRef} className="sr__list">
        {allResumes.map(({ name, date }, index) => (
          <StoredResume key={index} name={name} date={date} />
        ))}
      </ul>
      {showContextMenu && (
        <ContextMenu
          menuRef={menuRef}
          text={contextText}
          cords={contextCords}
          setShowContextMenu={setShowContextMenu}
        />
      )}
    </div>
  );
};

export default StoredResumes;
