const StoredResume = ({ name, date }) => {
  //   console.log(format(JSON.parse(date), "PPPPpppp"));
  console.log(date);
  return (
    <li className="sr__item">
      <h4>{name}</h4>
      <p>{date}</p>
    </li>
  );
};

export default StoredResume;
