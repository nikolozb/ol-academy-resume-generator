import React from "react";

const Skills = ({ handleOnInputChange, value }) => {
  return (
    <>
      {" "}
      <textarea
        name="skills"
        id=""
        cols="30"
        rows="10"
        onChange={handleOnInputChange}
        value={value.skills}
      ></textarea>
    </>
  );
};

export default Skills;
