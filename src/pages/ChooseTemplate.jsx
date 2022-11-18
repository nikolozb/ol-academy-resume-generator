import { palette, dummy_data, themeDesc } from "../data";
import { useNavigate, createSearchParams } from "react-router-dom";
import { useState } from "react";

import TemplateBox from "../components/TemplateBox";

import { Button } from "reactstrap";

const ChooseTemplate = () => {
  const [hex, setHex] = useState("");
  const [name, setName] = useState("ClassicBlack");
  const [theme, setTheme] = useState("Angora");
  const [themeText, setThemeText] = useState(themeDesc.angora);
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate({
      pathname: "/create",
      search: createSearchParams({
        theme: theme,
        color: name,
      }).toString(),
    });
  };

  return (
    <div className="ct">
      <div className="ct__left">
        <h3>Theme - {theme}</h3>
        <p className="ct__desc">{themeText}</p>
        <>
          <h3>
            Color - <span style={{ color: `${hex}` }}>{name}</span>
          </h3>
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
        <Button onClick={handleNavigate} className="ct__button">
          Select this theme
        </Button>
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
