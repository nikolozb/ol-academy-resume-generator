import React from "react";

const AngoraTemplate = ({
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
    <div className="resume-template angora">
      <h1 className="angora__name" style={{ color: `${color}` }}>
        {name}
        <hr />
      </h1>
      <div className="angora__contacts">
        <h3 className="angora__contacts-item">Address: {address}</h3>
        <h3 className="angora__contacts-item">Email: {email}</h3>
        <h3 className="angora__contacts-item">Number: {number}</h3>
      </div>
      <h1 style={{ color: `${color}` }}>
        Education
        <hr />
      </h1>
      <div className="angora__edu">
        <div className="angora__edu-content flex-between">
          <span>{education}</span>
        </div>
      </div>
      <h1 style={{ color: `${color}` }}>
        Experience
        <hr />
      </h1>
      <div className="angora__exp">
        <div className="angora__exp-content">
          <div className="flex-between">
            <h3>{experience}</h3>
          </div>
        </div>
      </div>
      <h1 style={{ color: `${color}` }}>
        Skills
        <hr />
      </h1>
      <div className="angora__skills">{skills}</div>
      <h1 style={{ color: `${color}` }}>
        Professional Summary
        <hr />
      </h1>
      <div className="angora__prosum">{prosummary}</div>
    </div>
  );
};

export default AngoraTemplate;
