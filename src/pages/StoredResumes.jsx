import { useRef, useState } from "react";
import useContextMenu from "../hooks/useContextMenu";

import StoredResume from "../components/StoredResume";
import ContextMenu from "../components/ContextMenu";

const StoredResumes = () => {
  const [selectedResume, setSelectedResume] = useState("");
  const allResumes = JSON.parse(localStorage.getItem("all_resumes"));

  const listRef = useRef();
  const menuRef = useRef();

  const getExactResume = (id) => setSelectedResume(id);

  const deleteResumeHandler = () => {
    localStorage.removeItem("all_resumes");
    localStorage.setItem(
      "all_resumes",
      JSON.stringify(allResumes.filter(({ id }) => id !== selectedResume))
    );
  };

  const { contextCords, contextText, showContextMenu, setShowContextMenu } =
    useContextMenu(listRef, menuRef);

  return (
    <div className="sr">
      {!!!allResumes?.length ? (
        <h1>No resumes...</h1>
      ) : (
        <ul ref={listRef} className="sr__list">
          {allResumes.map(({ name, date, id }) => (
            <StoredResume
              key={id}
              id={id}
              name={name}
              date={date}
              getExactResume={getExactResume}
            />
          ))}
        </ul>
      )}
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
