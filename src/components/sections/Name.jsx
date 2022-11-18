import { Input } from "reactstrap";

const Name = ({ handleOnInputChange, value, placeholder }) => {
  return (
    <>
      <Input
        bsSize="lg"
        type="text"
        name="name"
        value={value.name}
        onChange={handleOnInputChange}
        placeholder={placeholder[0]}
      />
    </>
  );
};

export default Name;
