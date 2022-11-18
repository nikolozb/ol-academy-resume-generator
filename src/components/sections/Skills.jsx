import React from "react";
import { Input } from "reactstrap";

const Skills = ({ handleOnInputChange, value, placeholder }) => {
  return (
    <>
      <Input
        bsSize="lg"
        type="textarea"
        name="skills"
        id=""
        cols="30"
        rows="10"
        onChange={handleOnInputChange}
        value={value.skills}
        placeholder={placeholder[6]}
      />
    </>
  );
};

export default Skills;
