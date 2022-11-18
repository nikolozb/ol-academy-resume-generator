import React from "react";
import { Input } from "reactstrap";

const ProSummary = ({ handleOnInputChange, value, placeholder }) => {
  return (
    <>
      <Input
        bsSize="lg"
        type="textarea"
        name="prosummary"
        id=""
        cols="30"
        rows="10"
        onChange={handleOnInputChange}
        value={value.prosummary}
        placeholder={placeholder[7]}
      />
    </>
  );
};

export default ProSummary;
