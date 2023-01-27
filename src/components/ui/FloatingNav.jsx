import React from 'react';
import { AiOutlineHome, AiOutlineUser } from 'react-icons/ai';
import { BiBook, BiMessageSquareDetail } from 'react-icons/bi';
import { RiServiceLine } from 'react-icons/ri';
import { MdModelTraining } from 'react-icons/md';
import '../../styles/floatingNav.scss';

const FloatingNav = () => (
  <div id="floating-nav" className="floating-nav">
    <a href="/#">
      <AiOutlineHome />
    </a>
    <a href="#about">
      <AiOutlineUser />
    </a>
    <a href="#experience">
      <BiBook />
    </a>
    <a href="#services">
      <RiServiceLine />
    </a>
    <a href="#portfolio">
      <MdModelTraining />
    </a>
    <a href="#contacts">
      <BiMessageSquareDetail />
    </a>
  </div>
);

export default FloatingNav;
