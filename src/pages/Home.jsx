import { Link } from "react-router-dom";
import { Button } from "reactstrap";

const Home = () => {
  const AllResumes = JSON.parse(localStorage.getItem("all_resumes"));
  const lastResume =
    AllResumes === undefined || AllResumes === null
      ? {}
      : AllResumes[AllResumes.length - 1];

  return (
    <div className="home">
      <div className="home__last">
        <h4 className="home__title">Latest resume:</h4>
        <span className="home__info">
          {AllResumes === null ? (
            <h3>No resumes</h3>
          ) : (
            <span>
              {lastResume?.name} - {lastResume?.date}
            </span>
          )}
        </span>
        <Link to="/stored_resumes">
          <Button color="info" size="" className="home__stored">
            See All
          </Button>
        </Link>
      </div>
      <div className="home__buttons">
        <Link to="/choose-template">
          <Button color="secondary" size="lg">
            Choose template
          </Button>
        </Link>
        <Link to="/import-resume">
          <Button color="secondary" size="lg">
            Import resume
          </Button>
        </Link>
        <Link to="/">
          <Button color="secondary" size="lg">
            Continue
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default Home;
