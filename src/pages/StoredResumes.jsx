import { useRef, useState } from "react";
import useContextMenu from "../hooks/useContextMenu";

import StoredResume from "../components/StoredResume";
import ContextMenu from "../components/ContextMenu";

const StoredResumes = () => {
  const [selectedResume, setSelectedResume] = useState(0);
  const allResumes = JSON.parse(localStorage.getItem("all_resumes"));

  console.log(selectedResume);

  const listRef = useRef();
  const menuRef = useRef();

  const getExactResume = (id) => setSelectedResume(id);

  const deleteResumeHandler = () => {};

  const { contextCords, contextText, showContextMenu, setShowContextMenu } =
    useContextMenu(listRef, menuRef);

  return (
    <div className="sr">
      <ul ref={listRef} className="sr__list">
        {allResumes.map(({ name, date }, index) => (
          <StoredResume
            key={index}
            name={name}
            date={date}
            id={index}
            getExactResume={getExactResume}
          />
        ))}
      </ul>
      {showContextMenu && (
        <ContextMenu
          menuRef={menuRef}
          text={contextText}
          cords={contextCords}
          setShowContextMenu={setShowContextMenu}
          deleteResumeHandler={deleteResumeHandler}
        />
      )}
    </div>
  );
};

export default StoredResumes;
