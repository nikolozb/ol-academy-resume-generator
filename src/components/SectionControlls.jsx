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
      <button disabled={!(pageIndex === 5)}>Generate</button>
    </div>
  );
};

export default SectionControlls;
