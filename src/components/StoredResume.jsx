const StoredResume = ({ name, date, id, getExactResume }) => {
  return (
    <li className="sr__item" onContextMenu={() => getExactResume(id)}>
      <h4>{name}</h4>
      <p>{date}</p>
    </li>
  );
};

export default StoredResume;
