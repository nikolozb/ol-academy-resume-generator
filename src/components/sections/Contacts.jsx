import { Input } from "reactstrap";

const Contacts = ({ handleOnInputChange, value, placeholder }) => {
  return (
    <>
      <Input
        bsSize="lg"
        type="text"
        name="address"
        onChange={handleOnInputChange}
        value={value.address}
        placeholder={placeholder[1]}
      />
      <Input
        bsSize="lg"
        type="email"
        name="email"
        onChange={handleOnInputChange}
        value={value.email}
        placeholder={placeholder[2]}
      />
      <Input
        bsSize="lg"
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
