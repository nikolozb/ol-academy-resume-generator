import { useState, useEffect, useCallback } from "react";

const usePopup = (ref) => {
  const [showPopup, setShowPopup] = useState(false);

  const togglePopup = useCallback(() => {
    setShowPopup(!showPopup);
  }, [showPopup]);

  useEffect(() => {
    const hidePopup = (e) => {
      if (e.target === ref.current) {
        togglePopup();
      }
    };

    document.addEventListener("click", hidePopup);
    return () => document.removeEventListener("click", hidePopup);
  }, [togglePopup, ref]);

  return {
    togglePopup,
    showPopup,
  };
};

export default usePopup;
