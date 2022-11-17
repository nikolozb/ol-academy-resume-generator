import { Link } from "react-router-dom";

const SectionControlls = ({ pageIndex, setPageIndex }) => {
  return (
    <div>
      <button
        disabled={pageIndex === 0}
        onClick={() => setPageIndex((prevState) => prevState - 1)}
      >
        Back
      </button>
      <button
        disabled={pageIndex === 5}
        onClick={() => setPageIndex((prevState) => prevState + 1)}
      >
        Next
      </button>
      <Link
        to="/export"
        style={{ pointerEvents: pageIndex === 5 ? "" : "none" }}
      >
        Generate
      </Link>
    </div>
  );
};

export default SectionControlls;
