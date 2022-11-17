import React from "react";

const Education = ({ handleOnInputChange, value }) => {
  return (
    <>
      {" "}
      <textarea
        name="education"
        id=""
        cols="30"
        rows="10"
        onChange={handleOnInputChange}
        value={value.education}
      ></textarea>
    </>
  );
};

export default Education;
