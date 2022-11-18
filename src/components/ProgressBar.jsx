import React from "react";

const ProgressBar = ({ length }) => {
  return (
    <div className="progress-bar">
      <div
        style={{
          width: `${60 * (length + 1)}px`,
          height: "5px",
          backgroundColor: "red",
          transition: "0.3s all",
        }}
      ></div>
      <div className="progress-bar__block">
        <div className="progress-bar__item">1</div>
        <div className="progress-bar__item">1</div>
        <div className="progress-bar__item">1</div>
        <div className="progress-bar__item">1</div>
        <div className="progress-bar__item">1</div>
        <div className="progress-bar__item">1</div>
      </div>
    </div>
  );
};

export default ProgressBar;
