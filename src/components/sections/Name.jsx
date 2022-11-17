import React from "react";

const Name = ({ handleOnInputChange, value, placeholder }) => {
  return (
    <>
      {" "}
      <input
        type="text"
        name="name"
        value={value.name}
        onChange={handleOnInputChange}
        placeholder={placeholder[0]}
      />
    </>
  );
};

export default Name;
