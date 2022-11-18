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
      <div className="angora__contacts">
        <h1 className="angora__name" style={{ color: `${color}` }}>
          {name}
          <hr />
        </h1>
        <h6 className="angora__contacts-item">Address: {address}</h6>
        <h6 className="angora__contacts-item">Email: {email}</h6>
        <h6 className="angora__contacts-item">Number: {number}</h6>
      </div>
      <div className="angora__edu">
        <h2 style={{ color: `${color}` }}>
          Education
          <hr />
        </h2>
        <div className="angora__edu-content flex-between">
          <span>{education}</span>
        </div>
      </div>
      <div className="angora__exp">
        <h2 style={{ color: `${color}` }}>
          Experience
          <hr />
        </h2>
        <div className="angora__exp-content">
          <div className="flex-between">
            <span>{experience}</span>
          </div>
        </div>
      </div>
      <div className="angora__skills">
        <h2 style={{ color: `${color}` }}>
          Skills
          <hr />
        </h2>
        {skills}
      </div>
      <div className="angora__prosum">
        <h2 style={{ color: `${color}` }}>
          Professional Summary
          <hr />
        </h2>
        {prosummary}
      </div>
    </div>
  );
};

export default AngoraTemplate;
