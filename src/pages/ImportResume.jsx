import { useState } from "react";
import { createSearchParams, useNavigate } from "react-router-dom";

import { Button } from "reactstrap";

const ImportResume = () => {
  const [data, setData] = useState(null);

  const handleUpload = async ({ target: { files } }) => {
    const reader = new FileReader();

    reader.onload = async ({ target: { result } }) => {
      setData(JSON.parse(result));
    };

    reader.readAsText(files[0]);
  };

  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate({
      pathname: "/create",
      search: createSearchParams({
        theme: data.theme,
        color: data.color,
      }).toString(),
    });
    localStorage.setItem("data", JSON.stringify(data));
  };

  return (
    <div className="import-resume">
      <input
        id="file"
        type="file"
        accept="application/JSON"
        onChange={handleUpload}
        className="import-resume__input"
      />
      <Button disabled={data === null} size="lg" onClick={handleNavigate}>
        Import
      </Button>
    </div>
  );
};

export default ImportResume;
