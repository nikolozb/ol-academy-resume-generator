import React from "react";

const AngoraTemplate = ({
  name,
  contacts,
  education,
  experience,
  skills,
  prosum,
  color,
}) => {
  return (
    <div className="resume-template angora">
      <h1 className="angora__name" style={{ color: `${color}` }}>
        {name}
      </h1>
      <hr />
      <div className="angora__contacts">
        <h3 className="angora__contacts-item">{contacts.address}</h3>
        <h3 className="angora__contacts-item">{contacts.email}</h3>
        <h3 className="angora__contacts-item">{contacts.number}</h3>
      </div>
      <h1 style={{ color: `${color}` }}>Education</h1>
      <hr />
      <div className="angora__edu">
        <div className="angora__edu-content flex-between">
          <span>{education.major}</span>
          <span>{education.date}</span>
        </div>
      </div>
      <h1 style={{ color: `${color}` }}>Experience</h1>
      <hr />
      <div className="angora__exp">
        <div className="angora__exp-content">
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
      <h1 style={{ color: `${color}` }}>Skills</h1>
      <hr />
      <div className="angora__skills">
        {skills.map((skill, id) => (
          <span key={id} style={{ display: "block" }}>
            {skill}
          </span>
        ))}
      </div>
      <h1 style={{ color: `${color}` }}>Professional Summary</h1>
      <hr />
      <div className="angora__prosum">{prosum}</div>
    </div>
  );
};

export default AngoraTemplate;
