import { useState, useEffect } from "react";
import { sectionNames } from "../data";

import Name from "../components/sections/Name";
import Contacts from "../components/sections/Contacts";
import Skills from "../components/sections/Skills";
import Experience from "../components/sections/Experience";
import Education from "../components/sections/Education";
import ProSummary from "../components/sections/ProSummary";
import SectionControlls from "../components/SectionControlls";

const Create = () => {
  const [pageIndex, setPageIndex] = useState(0);
  const [inputValues, setInputValues] = useState(
    JSON.parse(localStorage.getItem("data")) || sectionNames
  );

  useEffect(() => {
    localStorage.setItem("data", JSON.stringify(inputValues));
  }, [inputValues]);

  const handleOnInputChange = (e) => {
    console.log();
    const { name, value } = e.target;
    setInputValues({
      ...inputValues,
      [name]: value,
    });
  };

  console.log(inputValues);

  const switchSectionsHandler = () => {
    if (pageIndex === 0) {
      return (
        <Name handleOnInputChange={handleOnInputChange} value={inputValues} />
      );
    }
    if (pageIndex === 1) {
      return (
        <Contacts
          handleOnInputChange={handleOnInputChange}
          value={inputValues}
        />
      );
    }
    if (pageIndex === 2) {
      return (
        <Skills handleOnInputChange={handleOnInputChange} value={inputValues} />
      );
    }
    if (pageIndex === 3) {
      return (
        <Experience
          handleOnInputChange={handleOnInputChange}
          value={inputValues}
        />
      );
    }
    if (pageIndex === 4) {
      return (
        <Education
          handleOnInputChange={handleOnInputChange}
          value={inputValues}
        />
      );
    }
    if (pageIndex === 5) {
      return (
        <ProSummary
          handleOnInputChange={handleOnInputChange}
          value={inputValues}
        />
      );
    }
  };

  return (
    <div>
      {switchSectionsHandler()}
      <SectionControlls pageIndex={pageIndex} setPageIndex={setPageIndex} />
    </div>
  );
};

export default Create;
