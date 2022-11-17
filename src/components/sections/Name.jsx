import React from "react";

const Name = ({ handleOnInputChange, value }) => {
  return (
    <>
      {" "}
      <input
        type="text"
        name="name"
        value={value.name}
        onChange={handleOnInputChange}
      />
    </>
  );
};

export default Name;
