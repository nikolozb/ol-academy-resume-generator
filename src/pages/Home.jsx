import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

import { Button } from "reactstrap";

const Home = () => {
  const [lastResume, setLastResume] = useState(null);

  useEffect(() => {
    const AllResumes = JSON.parse(localStorage.getItem("all_resumes"));
    if (AllResumes?.length !== 0 && AllResumes !== null) {
      setLastResume(AllResumes[AllResumes.length - 1]);
    } else return;
  }, []);

  const navigate = useNavigate();
  const handleNavigate = () => {
    navigate({
      pathname: "/create",
    });
  };

  return (
    <div className="home">
      <div className="home__last">
        <h4 className="home__title">Latest resume:</h4>
        <span className="home__info">
          {lastResume === null ? (
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
