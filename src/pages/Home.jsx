import { Link } from "react-router-dom";
import { Button } from "reactstrap";

const Home = () => {
  return (
    <div className="home">
      <div className="home__last">
        <h4 className="home__title">Latest resume:</h4>
        <span className="home__info">name lastname | date</span>
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
