import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="home">
      <div className="home__last">
        <h4 className="home__title">Latest resume:</h4>
        <span className="home__info">name lastname | date</span>
        <Link to="/stored_resumes" className="home__stored">
          See all
        </Link>
      </div>
      <div>
        <Link to="/choose-template">Choose Template</Link>
        <Link to="/import-resume">Import Resume</Link>
        <Link to="/">Continue</Link>
      </div>
    </div>
  );
};

export default Home;
