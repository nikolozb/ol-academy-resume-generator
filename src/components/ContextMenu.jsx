import { Button } from "reactstrap";

const ContextMenu = ({
  text,
  cords,
  setShowContextMenu,
  menuRef,
  deleteResumeHandler,
}) => {
  return (
    <div
      style={{ top: `${cords.y}px`, left: `${cords.x}px` }}
      className="context-menu"
      ref={menuRef}
      onContextMenu={(e) => e.preventDefault()}
    >
      <Button
        onClick={() => {
          deleteResumeHandler();
          setShowContextMenu(false);
        }}
      >
        Delete
      </Button>
    </div>
  );
};

export default ContextMenu;
