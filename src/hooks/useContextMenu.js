import { useState, useEffect } from "react";

const useContextMenu = (ref1, ref2) => {
  const [showContextMenu, setShowContextMenu] = useState(false);
  const [contextText, setContextText] = useState("");
  const [contextCords, setContextCords] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const showContext = (e) => {
      if (ref1.current.contains(e.target)) {
        e.preventDefault();
        setContextCords({ x: e.pageX, y: e.pageY });
        setContextText(e.target.innerText);
        setShowContextMenu(true);
      }
    };

    document.addEventListener("contextmenu", showContext);
    return () => document.removeEventListener("contextmenu", showContext);
  }, [ref1]);

  useEffect(() => {
    const hideContext = (e) => {
      if (ref2.current && ref2.current.contains(e.target)) return;
      if (!ref1.current.contains(e.target)) {
        setShowContextMenu(false);
      }
    };

    document.addEventListener("click", hideContext);
    document.addEventListener("contextmenu", hideContext);
    return () => {
      document.removeEventListener("click", hideContext);
      document.removeEventListener("contextmenu", hideContext);
    };
  }, [ref1, ref2]);

  return { showContextMenu, contextCords, contextText, setShowContextMenu };
};

export default useContextMenu;
