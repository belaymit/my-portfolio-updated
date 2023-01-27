import React, { useState } from 'react';
import QualificationSection from '../ui/QualificationSection';
import '../../styles/qualification.scss';

const Qualification = () => {
  const [toggleState, setToggleState] = useState(1);
  const toggleTab = (index) => {
    setToggleState(index);
  };
  return (

    <section className="qualification section" id="experience">
      <h2 className="section-title">Qualification</h2>
      <span className="section-subtitle">My Personal Journey</span>
      <div className="qualification-container container">
        <div className="qualification-tabs">
          <div
            className={toggleState === 1 ? 'qualification-button qualification-active button--flex'
              : 'qualification-button button--flex'}
            onClick={() => toggleTab(1)}
            role="presentation"
          >
            <i className="uil uil-graduation-cap qualification-icon" />
            {' '}
            Education
          </div>
          <div
            className={toggleState === 2 ? 'qualification-button qualification-active button--flex'
              : 'qualification-button button--flex'}
            onClick={() => toggleTab(2)}
            role="presentation"
          >
            <i className="uil uil-briefcase-alt qualification-icon" />
            {' '}
            Experience
          </div>
        </div>
        <QualificationSection toggle={toggleState} />
      </div>
    </section>
  );
};

export default Qualification;
