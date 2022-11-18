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
          name={data.name}
          email={data.email}
          address={data.address}
          number={data.number}
          education={data.education}
          experience={data.experience}
          skills={data.skills}
          prosummary={data.prosummary}
          color={color}
        />
      )}
      {theme === "Blueprint" && (
        <BlueprintTemplate
          name={data.name}
          email={data.email}
          address={data.address}
          number={data.number}
          education={data.education}
          experience={data.experience}
          skills={data.skills}
          prosummary={data.prosummary}
          color={color}
        />
      )}
    </div>
  );
};

export default TemplateBox;
