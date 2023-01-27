import React from 'react';
import '../../styles/home.scss';
import Data from '../data/Data';
import ScrollBehavior from '../scrollBehavior/ScrollBehavior';
import Socials from '../socials/Socials';

const Home = () => (
  <section className="home section" id="home">
    <div className="home-container container grid">
      <div className="home-content grid">
        <Socials />
        <div className="home-img" />
        <Data />
      </div>
      <ScrollBehavior />
    </div>
  </section>
);
export default Home;
