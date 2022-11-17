import React from "react";

const Education = ({ handleOnInputChange, value, placeholder }) => {
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
        placeholder={placeholder[4]}
      ></textarea>
    </>
  );
};

export default Education;
