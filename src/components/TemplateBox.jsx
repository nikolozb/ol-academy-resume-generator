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
  const {
    name,
    email,
    address,
    number,
    education,
    experience,
    skills,
    prosummary,
  } = data;

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
          name={name}
          email={email}
          address={address}
          number={number}
          education={education}
          experience={experience}
          skills={skills}
          prosummary={prosummary}
          color={color}
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
          color={color}
        />
      )}
    </div>
  );
};

export default TemplateBox;
