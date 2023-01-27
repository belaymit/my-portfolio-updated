import React from 'react';
import { backendSkills } from '../../commons/navLink';

const Backend = () => (
  <div className="skills-content">
    <h3 className="skills-title">
      Backend Developer
    </h3>
    <div className="skills-box">
      <div className="skills-group">

        {
          backendSkills.map((elem) => (
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

export default Backend;
