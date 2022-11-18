import { useState } from "react";

import { Button } from "reactstrap";

const ExportJSON = () => {
  const [data] = useState(localStorage.getItem("data"));

  const exportJSONData = () => {
    const jsonString = `data:text/json;chatset=utf-8,${encodeURIComponent(
      data
    )}`;
    const link = document.createElement("a");
    link.href = jsonString;
    link.download = "cv-data.json";
    link.click();
  };

  return (
    <>
      <Button size="lg" type="button" onClick={exportJSONData}>
        Export JSON
      </Button>
    </>
  );
};

export default ExportJSON;
