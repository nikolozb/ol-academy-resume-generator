import React from "react";
import { Input } from "reactstrap";

const Experience = ({ handleOnInputChange, value, placeholder }) => {
  return (
    <>
      <Input
        bsSize="lg"
        type="textarea"
        name="experience"
        id=""
        cols="30"
        rows="10"
        onChange={handleOnInputChange}
        value={value.experience}
        placeholder={placeholder[5]}
      />
    </>
  );
};

export default Experience;
