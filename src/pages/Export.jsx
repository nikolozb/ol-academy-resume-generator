import { useState, useRef } from "react";
import { colorPicker } from "../helpers/colorPicker";
import { useReactToPrint } from "react-to-print";
import { toPng } from "html-to-image";
import usePopup from "../hooks/usePopup";

import AngoraTemplate from "../components/AngoraTemplate";
import BlueprintTemplate from "../components/BlueprintTemplate";
import ExportJSON from "../components/ExportJSON";
import { Button } from "reactstrap";
import Popup from "../components/Popup";
import { useNavigate } from "react-router-dom";

const Export = () => {
  const [{ theme, color }] = useState(
    JSON.parse(localStorage.getItem("template"))
  );
  const [
    { name, email, address, number, education, experience, skills, prosummary },
  ] = useState(JSON.parse(localStorage.getItem("data")));
  const popupRef = useRef();
  const resumeRef = useRef();

  const navigate = useNavigate();

  const { togglePopup, showPopup } = usePopup(popupRef);

  const exportPdfHandler = useReactToPrint({
    documentTitle: "cv-pdf",
    content: () => resumeRef.current,
  });

  const exportImageHandler = async () => {
    const dataUrl = await toPng(resumeRef.current);

    const link = document.createElement("a");
    link.download = "cv-image.png";
    link.href = dataUrl;
    link.click();
  };

  return (
    <div className="export">
      {showPopup && <Popup popupRef={popupRef} />}
      <div className="export__buttons">
        <div className="export__block1">
          <Button
            size="lg"
            className="export__btn"
            onClick={exportImageHandler}
          >
            Export Image
          </Button>
          <Button size="lg" className="export__btn" onClick={exportPdfHandler}>
            Export PDF
          </Button>
          <ExportJSON />
        </div>
        <div className="export__block2">
          <Button size="lg" className="export__btn" onClick={togglePopup}>
            Build another resume
          </Button>
          <Button
            size="lg"
            className="export__btn"
            onClick={() => navigate("/stored_resumes")}
          >
            See stored resumes
          </Button>
        </div>
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
