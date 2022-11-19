import StoredResume from "../components/StoredResume";

const StoredResumes = () => {
  const allResumes = JSON.parse(localStorage.getItem("all_resumes"));

  return (
    <div className="sr">
      {allResumes.map(({ name, date }) => (
        <StoredResume name={name} date={date} />
      ))}
    </div>
  );
};

export default StoredResumes;
