import React from "react";

const ProSummary = ({ handleOnInputChange, value }) => {
  return (
    <>
      {" "}
      <textarea
        name="prosummary"
        id=""
        cols="30"
        rows="10"
        onChange={handleOnInputChange}
        value={value.prosummary}
      ></textarea>
    </>
  );
};

export default ProSummary;
