import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <Link to="/choose-template">Choose Template</Link>
      <Link to="/import-resume">Import Resume</Link>
      <Link to="/">Continue</Link>
    </div>
  );
};

export default Home;
