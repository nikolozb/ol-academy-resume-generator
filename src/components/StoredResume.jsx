import { format } from "date-fns";

const StoredResume = ({ name, date }) => {
  //   console.log(format(JSON.parse(date), "PPPPpppp"));
  console.log(date);
  return (
    <div className="sr__item">
      <h4>{name}</h4>
      <p>{date}</p>
    </div>
  );
};

export default StoredResume;
