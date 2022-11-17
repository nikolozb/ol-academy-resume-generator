import React from "react";

const Contacts = ({ handleOnInputChange, value }) => {
  return (
    <>
      <input
        type="text"
        name="address"
        onChange={handleOnInputChange}
        value={value.address}
      />
      <input
        type="email"
        name="email"
        onChange={handleOnInputChange}
        value={value.email}
      />
      <input
        type="number"
        name="number"
        onChange={handleOnInputChange}
        value={value.number}
      />
    </>
  );
};

export default Contacts;
