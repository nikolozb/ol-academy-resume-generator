import React from "react";

const BlueprintTemplate = ({
  name,
  email,
  address,
  number,
  education,
  experience,
  skills,
  prosummary,
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
            <h3 className="bp__contacts-item">Address: {address}</h3>
            <h3 className="bp__contacts-item">Email: {email}</h3>
            <h3 className="bp__contacts-item">Number: {number}</h3>
          </div>
          <hr />
          <h1 style={{ color: `${color}` }}>Skills</h1>
          <div className="bp__skills">{skills}</div>
          <hr />

          <h1 style={{ color: `${color}` }}>Professional Summary</h1>
          <div className="bp__prosum">{prosummary}</div>
        </div>
        <div className="bp__right">
          <h1 style={{ color: `${color}` }}>Education</h1>
          <hr />
          <div className="bp__edu">
            <div className="bp__edu-content flex-between">
              <span>{education}</span>
            </div>
          </div>
          <h1 style={{ color: `${color}` }}>Experience</h1>
          <hr />
          <div className="bp__exp">
            <div className="bp__exp-content">
              <div className="flex-between">
                <h3>{experience}</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlueprintTemplate;
