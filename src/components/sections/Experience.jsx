import React from "react";

const Experience = ({ handleOnInputChange, value }) => {
  return (
    <>
      <textarea
        name="experience"
        id=""
        cols="30"
        rows="10"
        onChange={handleOnInputChange}
        value={value.experience}
      ></textarea>
    </>
  );
};

export default Experience;
