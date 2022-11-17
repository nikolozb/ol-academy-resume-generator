import React from "react";

const Contacts = ({ handleOnInputChange, value, placeholder }) => {
  return (
    <>
      <input
        type="text"
        name="address"
        onChange={handleOnInputChange}
        value={value.address}
        placeholder={placeholder[1]}
      />
      <input
        type="email"
        name="email"
        onChange={handleOnInputChange}
        value={value.email}
        placeholder={placeholder[2]}
      />
      <input
        type="number"
        name="number"
        onChange={handleOnInputChange}
        value={value.number}
        placeholder={placeholder[3]}
      />
    </>
  );
};

export default Contacts;
