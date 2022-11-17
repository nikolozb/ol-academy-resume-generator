import { useState } from "react";

import Name from "../components/sections/Name";
import Contacts from "../components/sections/Contacts";
import Skills from "../components/sections/Skills";
import Experience from "../components/sections/Experience";
import Education from "../components/sections/Education";
import ProSummary from "../components/sections/ProSummary";

const Create = () => {
  const [pageIndex, setPageIndex] = useState(0);

  const switchSectionsHandler = () => {
    if (pageIndex === 0) {
      return <Name />;
    }
    if (pageIndex === 1) {
      return <Contacts />;
    }
    if (pageIndex === 2) {
      return <Skills />;
    }
    if (pageIndex === 3) {
      return <Experience />;
    }
    if (pageIndex === 4) {
      return <Education />;
    }
    if (pageIndex === 5) {
      return <ProSummary />;
    }
  };

  return <div>{switchSectionsHandler()}</div>;
};

export default Create;
