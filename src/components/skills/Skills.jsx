import React from 'react';
import Frontend from '../ui/Frontend';
import Backend from '../ui/Backend';
import '../../styles/skill.scss';

const Skills = () => (
  <section className="skills section" id="skills">
    <h2 className="section-title">Skills</h2>
    <span className="section-subtitle">My Technical Skills</span>
    <div className="skills-container container grid">
      <Frontend />
      <Backend />
    </div>
  </section>
);

export default Skills;
