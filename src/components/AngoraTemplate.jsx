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
        <h5 className="angora__contacts-item">Address: {address}</h5>
        <h5 className="angora__contacts-item">Email: {email}</h5>
        <h5 className="angora__contacts-item">Number: {number}</h5>
      </div>
      <div className="angora__edu">
        <h2 style={{ color: `${color}` }}>
          Education
          <hr />
        </h2>
        <div className="angora__edu-content flex-between">
          <p>{education}</p>
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
            <p>{experience}</p>
          </div>
        </div>
      </div>
  
      <h1 style={{ color: `${color}` }}>
        Skills
        <hr />
      </h1>
      <div className="angora__skills">
        <p>{skills}</p>
      </div>
      <h1 style={{ color: `${color}` }}>
        Professional Summary
        <hr />
      </h1>
      <div className="angora__prosum">
        <p>{prosummary}</p>
      </div>
    </div>
  );
};

export default AngoraTemplate;
