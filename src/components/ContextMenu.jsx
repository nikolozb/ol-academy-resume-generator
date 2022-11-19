import React from "react";

const ContextMenu = ({ text, cords, setShowContextMenu, menuRef }) => {
  return (
    <div
      style={{ top: `${cords.y}px`, left: `${cords.x}px` }}
      className="context-menu"
      ref={menuRef}
      onContextMenu={(e) => e.preventDefault()}
    >
      <button onClick={() => setShowContextMenu(false)}>Delete</button>
    </div>
  );
};

export default ContextMenu;
