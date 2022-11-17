import AngoraTemplate from "./AngoraTemplate";
import BlueprintTemplate from "./BlueprintTemplate";

const TemplateBox = ({
  theme,
  data,
  color,
  setTheme,
  setThemeText,
  themeDesc,
}) => {
  return (
    <div className="template-box">
      <button
        className="template-box__btn template-box__left"
        onClick={() => {
          setTheme("Angora");
          setThemeText(themeDesc.angora);
        }}
      >
        &larr;
      </button>
      <button
        className="template-box__btn template-box__right"
        onClick={() => {
          setTheme("Blueprint");
          setThemeText(themeDesc.bp);
        }}
      >
        &rarr;
      </button>
      {theme === "Angora" && (
        <AngoraTemplate
          name={data[0].name}
          contacts={data[1]}
          education={data[2]}
          experience={data[3]}
          skills={data[4].skills}
          prosum={data[5].prosummary}
          color={color}
        />
      )}
      {theme === "Blueprint" && (
        <BlueprintTemplate
          name={data[0].name}
          contacts={data[1]}
          education={data[2]}
          experience={data[3]}
          skills={data[4].skills}
          prosum={data[5].prosummary}
          color={color}
        />
      )}
    </div>
  );
};

export default TemplateBox;
