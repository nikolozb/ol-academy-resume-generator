import { Link } from "react-router-dom";
import { Button } from "reactstrap";

const SectionControlls = ({ pageIndex, setPageIndex }) => {
  return (
    <div className="section-controlls">
      <div>
        <Button
          size="lg"
          disabled={pageIndex === 0}
          onClick={() => setPageIndex((prevState) => prevState - 1)}
        >
          Back
        </Button>
        <Button
          size="lg"
          disabled={pageIndex === 5}
          onClick={() => setPageIndex((prevState) => prevState + 1)}
          className="section-controlls__next"
        >
          Next
        </Button>
      </div>
      <Link
        to="/export"
        style={{ pointerEvents: pageIndex === 5 ? "" : "none" }}
      >
        <Button size="lg" outline>
          Generate
        </Button>
      </Link>
    </div>
  );
};

export default SectionControlls;
