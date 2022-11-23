import { useState, useEffect } from "react";
import { sectionNames } from "../data";
import useFetch from "../hooks/useFetch";
import { ColorRing } from "react-loader-spinner";
import { useSearchParams } from "react-router-dom";
import { colorPicker } from "../helpers/colorPicker";

import Name from "../components/sections/Name";
import Contacts from "../components/sections/Contacts";
import Skills from "../components/sections/Skills";
import Experience from "../components/sections/Experience";
import Education from "../components/sections/Education";
import ProSummary from "../components/sections/ProSummary";
import SectionControlls from "../components/SectionControlls";
import AngoraTemplate from "../components/AngoraTemplate";
import BlueprintTemplate from "../components/BlueprintTemplate";

import { Progress } from "reactstrap";

const Create = () => {
  const [pageIndex, setPageIndex] = useState(0);
  const [inputValues, setInputValues] = useState(
    JSON.parse(localStorage.getItem("data")) || sectionNames
  );
  const [params] = useSearchParams();
  const theme = params.get("theme");
  const color = params.get("color");

  useEffect(() => {
    localStorage.setItem("data", JSON.stringify(inputValues));
  }, [inputValues]);

  useEffect(
    () =>
      localStorage.setItem(
        "template",
        JSON.stringify({ theme: theme, color: color })
      ),
    [theme, color]
  );

  const { data, loading } = useFetch(
    "https://my-json-server.typicode.com/nikolozb/resumes-db/placeholders"
  );

  const handleOnInputChange = (e) => {
    console.log();
    const { name, value } = e.target;
    setInputValues({
      ...inputValues,
      [name]: value,
    });
  };

  const switchSectionsHandler = () => {
    const pagesByIndex = [
      {
        pageIndex: 0,
        component: (
          <Name
            handleOnInputChange={handleOnInputChange}
            value={inputValues}
            placeholder={data}
          />
        ),
      },
      {
        pageIndex: 1,
        component: (
          <Contacts
            handleOnInputChange={handleOnInputChange}
            value={inputValues}
            placeholder={data}
          />
        ),
      },
      {
        pageIndex: 2,
        component: (
          <Skills
            handleOnInputChange={handleOnInputChange}
            value={inputValues}
            placeholder={data}
          />
        ),
      },
      {
        pageIndex: 3,
        component: (
          <Experience
            handleOnInputChange={handleOnInputChange}
            value={inputValues}
            placeholder={data}
          />
        ),
      },
      {
        pageIndex: 4,
        component: (
          <Education
            handleOnInputChange={handleOnInputChange}
            value={inputValues}
            placeholder={data}
          />
        ),
      },
      {
        pageIndex: 5,
        component: (
          <ProSummary
            handleOnInputChange={handleOnInputChange}
            value={inputValues}
            placeholder={data}
          />
        ),
      },
    ];
    return pagesByIndex.find((item) => item.pageIndex === pageIndex).component;
  };

  return (
    <div className="create">
      <div className="create__left">
        <div>
          <Progress
            value={pageIndex}
            min="0"
            max="5"
            barStyle={{ backgroundColor: `${colorPicker(color)}` }}
          />
          <div className="text-center">{pageIndex + 1} of 6</div>
        </div>
        {loading ? (
          <ColorRing
            visible={true}
            height="80"
            width="80"
            ariaLabel="blocks-loading"
            wrapperStyle={{}}
            wrapperClass="blocks-wrapper"
            colors={["#e15b64", "#f47e60", "#f8b26a", "#abbd81", "#849b87"]}
          />
        ) : (
          switchSectionsHandler()
        )}
        <SectionControlls pageIndex={pageIndex} setPageIndex={setPageIndex} />
      </div>
      <div className="create__right">
        {theme === "Angora" && (
          <AngoraTemplate
            name={inputValues.name}
            email={inputValues.email}
            address={inputValues.address}
            number={inputValues.number}
            education={inputValues.education}
            experience={inputValues.experience}
            skills={inputValues.skills}
            prosummary={inputValues.prosummary}
            color={colorPicker(color)}
          />
        )}
        {theme === "Blueprint" && (
          <BlueprintTemplate
            name={inputValues.name}
            email={inputValues.email}
            address={inputValues.address}
            number={inputValues.number}
            education={inputValues.education}
            experience={inputValues.experience}
            skills={inputValues.skills}
            prosummary={inputValues.prosummary}
            color={colorPicker(color)}
          />
        )}
      </div>
    </div>
  );
};

export default Create;
