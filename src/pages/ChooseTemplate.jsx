import { palette, dummy_data, themeDesc } from "../data";
import { Link } from "react-router-dom";
import { useState } from "react";

import TemplateBox from "../components/TemplateBox";

const ChooseTemplate = () => {
  const [hex, setHex] = useState("");
  const [name, setName] = useState("");
  const [theme, setTheme] = useState("Angora");
  const [themeText, setThemeText] = useState(themeDesc.angora);

  return (
    <div className="ct">
      <div className="ct__left">
        <h2>Theme - {theme}</h2>
        <p>{themeText}</p>
        <>
          <h3>COLOR - {name}</h3>
          <div className="ct__colors">
            {palette.map(({ id, name, hex }) => (
              <div
                key={id}
                style={{ backgroundColor: `${hex}` }}
                className="ct__color"
                onClick={() => {
                  setHex(hex);
                  setName(name);
                }}
              ></div>
            ))}
          </div>
        </>
        <Link to="/create">Select this theme</Link>
      </div>
      <div className="ct__right">
        {" "}
        <TemplateBox
          data={dummy_data}
          theme={theme}
          color={hex}
          setTheme={setTheme}
          setThemeText={setThemeText}
          themeDesc={themeDesc}
        />
      </div>
    </div>
  );
};

export default ChooseTemplate;
