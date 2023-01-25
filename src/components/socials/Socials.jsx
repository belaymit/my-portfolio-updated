import React from 'react';
import { socialLink } from '../../commons/navLink';

const Socials = () => (
  <div className="home-socials">
    {
      socialLink.map((item) => (
        <a href={item.link} className="home-social-icon" target={item.target} key={item.id}>
          <i className={`uil uil-${item.icon}`} />
        </a>
      ))
    }
  </div>
);

export default Socials;
