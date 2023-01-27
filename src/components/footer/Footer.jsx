import React from 'react';
import '../../styles/footer.scss';

const Footer = () => (
  <footer className="footer">
    <div className="footer-container container">
      <h1 className="footer-title">Belay BGWA</h1>
      <ul className="footer-list">
        <li>
          <a href="#about" className="footer-link">About</a>
        </li>
        <li>
          <a href="#portfolio" className="footer-link">Projects</a>
        </li>
        <li>
          <a href="#testimonials" className="footer-link">Testimonials</a>
        </li>
        <li>
          <a href="#skills" className="footer-link">Skills</a>
        </li>
      </ul>
      <div className="footer-social">
        <a href="https://www.facebook.com" className="footer-social-icon" target="_blank" rel="noreferrer">
          <i className="bx bxl-facebook" />
        </a>
        <a href="https://www.instagram.com" className="footer-social-icon" target="_blank" rel="noreferrer">
          <i className="bx bxl-instagram" />
        </a>
        <a href="https://twitter.com/2belamit" className="footer-social-icon" target="_blank" rel="noreferrer">
          <i className="bx bxl-twitter" />
        </a>
        <a href="https://www.linkedin.com/in/belay-birhanu-144ba714b/" className="footer-social-icon" target="_blank" rel="noreferrer">
          <i className="uil uil-linkedin" />
        </a>
        <a href="https://www.whatsapp.com/" className="footer-social-icon" target="_blank" rel="noreferrer">
          <i className="uil uil-whatsapp" />
        </a>
        <a href="https://github.com/belaymit/" className="footer-social-icon" target="_blank" rel="noreferrer">
          <i className="uil uil-github" />
        </a>
      </div>
      <span className="footer-copy">
        &#169; Full-stack Developer. All rights Reserved
      </span>
    </div>
  </footer>
);

export default Footer;
