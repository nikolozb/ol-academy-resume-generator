import React from "react";
import { Input } from "reactstrap";

const Education = ({ handleOnInputChange, value, placeholder }) => {
  return (
    <>
      <Input
        bsSize="lg"
        type="textarea"
        name="education"
        id=""
        cols="30"
        rows="10"
        onChange={handleOnInputChange}
        value={value.education}
        placeholder={placeholder[4]}
      />
    </>
  );
};

export default Education;
