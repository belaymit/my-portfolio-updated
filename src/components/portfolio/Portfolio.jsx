import React from 'react';
import { portfolioData } from '../../commons/navLink';
import '../../styles/portfolio.scss';

const Portfolio = () => (
  <section id="portfolio" className="portfolio-section">
    <h5>My Recent Works</h5>
    <h2>Portfolio</h2>
    <div className="container portfolio-section-container">
      {
        portfolioData.map(({
          id, image, title, github, demo,
        }) => (
          <article className="portfolio-item" key={id}>
            <div className="portfolio-item-img">
              <img src={image} alt={title} />
            </div>
            <h3>{title}</h3>
            <div className="portfolio-item-cta">
              <a href={github} className="btn light-btn" target="_blank" rel="noreferrer">GitHub</a>
              <a href={demo} className="btn primary" target="_blank" rel="noreferrer">Live Demo</a>
            </div>
          </article>
        ))
      }
    </div>
  </section>
);

export default Portfolio;
