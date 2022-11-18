import { useState, useRef } from "react";
import { colorPicker } from "../helpers/colorPicker";
import { useReactToPrint } from "react-to-print";

import AngoraTemplate from "../components/AngoraTemplate";
import BlueprintTemplate from "../components/BlueprintTemplate";
import ExportJSON from "../components/ExportJSON";
import { Button } from "reactstrap";

const Export = () => {
  const [{ theme, color }] = useState(
    JSON.parse(localStorage.getItem("template"))
  );
  const [
    { name, email, address, number, education, experience, skills, prosummary },
  ] = useState(JSON.parse(localStorage.getItem("data")));
  const resumeRef = useRef();

  const printPdfHandler = useReactToPrint({
    documentTitle: "cv-pdf",
    content: () => resumeRef.current,
  });

  return (
    <div className="export">
      <div className="export__buttons">
        <Button size="lg">Export Image</Button>
        <Button size="lg" onClick={printPdfHandler}>
          Export PDF
        </Button>
        <ExportJSON />
        <Button size="lg">Build another resume</Button>
      </div>
      <div className="export__preview" ref={resumeRef}>
        {theme === "Angora" && (
          <AngoraTemplate
            name={name}
            email={email}
            address={address}
            number={number}
            education={education}
            experience={experience}
            skills={skills}
            prosummary={prosummary}
            color={colorPicker(color)}
          />
        )}
        {theme === "Blueprint" && (
          <BlueprintTemplate
            name={name}
            email={email}
            address={address}
            number={number}
            education={education}
            experience={experience}
            skills={skills}
            prosummary={prosummary}
            color={colorPicker(color)}
          />
        )}
      </div>
    </div>
  );
};

export default Export;
