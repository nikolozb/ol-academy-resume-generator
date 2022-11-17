import React from "react";

const BlueprintTemplate = ({
  name,
  contacts,
  education,
  experience,
  skills,
  prosum,
  color,
}) => {
  return (
    <div className="resume-template bp">
      <h1 className="bp__name" style={{ color: `${color}` }}>
        {name}
      </h1>
      <hr />
      <div className="bp__body">
        <div className="bp__left">
          <h1 style={{ color: `${color}` }}>Contacts</h1>
          <div className="bp__contacts">
            <h3 className="bp__contacts-item">{contacts.address}</h3>
            <h3 className="bp__contacts-item">{contacts.email}</h3>
            <h3 className="bp__contacts-item">{contacts.number}</h3>
          </div>
          <hr />
          <h1 style={{ color: `${color}` }}>Skills</h1>
          <div className="bp__skills">
            {skills.map((skill, id) => (
              <span key={id} style={{ display: "block" }}>
                {skill}
              </span>
            ))}
          </div>
          <hr />

          <h1 style={{ color: `${color}` }}>Professional Summary</h1>
          <div className="bp__prosum">{prosum}</div>
        </div>
        <div className="bp__right">
          <h1 style={{ color: `${color}` }}>Education</h1>
          <hr />
          <div className="bp__edu">
            <div className="bp__edu-content flex-between">
              <span>{education.major}</span>
              <span>{education.date}</span>
            </div>
          </div>
          <h1 style={{ color: `${color}` }}>Experience</h1>
          <hr />
          <div className="bp__exp">
            <div className="bp__exp-content">
              <div className="flex-between">
                <h3>{experience.pos}</h3>
                <span>{experience.date}</span>
              </div>
              <div>
                {experience.duties.map((duty, id) => (
                  <span key={id} style={{ display: "block" }}>
                    {duty}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlueprintTemplate;
