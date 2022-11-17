import React from "react";

const Experience = ({ handleOnInputChange, value, placeholder }) => {
  return (
    <>
      <textarea
        name="experience"
        id=""
        cols="30"
        rows="10"
        onChange={handleOnInputChange}
        value={value.experience}
        placeholder={placeholder[5]}
      ></textarea>
    </>
  );
};

export default Experience;
