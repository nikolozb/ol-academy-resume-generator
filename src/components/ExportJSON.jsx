import { useState } from "react";

import { Button } from "reactstrap";

const ExportJSON = () => {
  const [data] = useState({
    ...JSON.parse(localStorage.getItem("data")),
    ...JSON.parse(localStorage.getItem("template")),
  });

  const exportJSONData = () => {
    const jsonString = `data:text/json;chatset=utf-8,${encodeURIComponent(
      JSON.stringify(data)
    )}`;
    const link = document.createElement("a");
    link.href = jsonString;
    link.download = "cv-data.json";
    link.click();
  };

  return (
    <>
      <Button
        size="lg"
        className="export__btn"
        type="button"
        onClick={exportJSONData}
      >
        Export JSON
      </Button>
    </>
  );
};

export default ExportJSON;
