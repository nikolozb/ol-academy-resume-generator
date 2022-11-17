import { useState } from "react";

const ExportJSON = () => {
  const [data] = useState(localStorage.getItem("data"));

  const exportJSONData = () => {
    const jsonString = `data:text/json;chatset=utf-8,${encodeURIComponent(
      data
    )}`;
    const link = document.createElement("a");
    link.href = jsonString;
    link.download = "data.json";
    link.click();
  };

  return (
    <>
      <button type="button" onClick={exportJSONData}>
        Export JSON
      </button>
    </>
  );
};

export default ExportJSON;
