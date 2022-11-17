import React from "react";

const ProgressBar = ({ length }) => {
  return (
    <div
      style={{
        width: `${50 * (length + 1)}px`,
        height: "5px",
        backgroundColor: "red",
        transition: "0.3s all",
      }}
    >
      <span>{length + 1}/6</span>
    </div>
  );
};

export default ProgressBar;
