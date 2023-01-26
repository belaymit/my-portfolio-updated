import React from 'react';
import { frontendSkills } from '../../commons/navLink';

const Frontend = () => (
  <div className="skills-content">
    <h3 className="skills-title">
      Frontend Developer
    </h3>
    <div className="skills-box">
      <div className="skills-group">

        {
          frontendSkills.map((elem) => (
            <div className="skills-data" key={elem.id}>
              <i className="bx bx-badge-check" />
              <div>
                <h3 className="skills-name">{elem.skill}</h3>
                <span className="skills-level">{elem.level}</span>
              </div>
            </div>
          ))
        }
      </div>
    </div>
  </div>
);

export default Frontend;
