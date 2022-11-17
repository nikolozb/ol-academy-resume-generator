import React from "react";

const Skills = ({ handleOnInputChange, value, placeholder }) => {
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
        placeholder={placeholder[6]}
      ></textarea>
    </>
  );
};

export default Skills;
