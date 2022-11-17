import React from "react";

const ProSummary = ({ handleOnInputChange, value, placeholder }) => {
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
        placeholder={placeholder[7]}
      ></textarea>
    </>
  );
};

export default ProSummary;
