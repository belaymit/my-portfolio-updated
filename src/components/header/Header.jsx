import React, { useState } from 'react';
import { navLink } from '../../commons/navLink';
import '../../styles/header.scss';

const Header = () => {
  window.addEventListener('scroll', function Scroll() {
    const header = document.querySelector('.header');
    // eslint-disable-next-line react/no-this-in-sfc
    if (this.scrollY >= 80) {
      header.classList.add('scroll-header');
    } else {
      header.classList.remove('scroll-header');
    }
  });
  const [toggleMenu, setToggleMenu] = useState(false);
  const handleClick = () => {
    setToggleMenu(!toggleMenu);
  };
  return (
    <header className="header">
      <nav className="nav container">
        <a href="/" className="nav-logo">My Portfolio</a>
        <div className={toggleMenu ? 'nav-menu show-menu' : 'nav-menu'}>
          <ul className="nav-list grid">
            {
            navLink.map((items) => (
              <li className="nav-item" key={items.id}>
                <a href={items.link} className="nav-link">
                  <i className={`uil uil-${items.icon} nav-icon`} />
                  {items.name}
                </a>
              </li>
            ))
          }
          </ul>
          <i className="uil uil-times nav-close" role="presentation" onClick={handleClick} />
        </div>
        <div className="nav-toggle" role="presentation" onClick={handleClick}>
          <i className="uil uil-apps" />
        </div>
      </nav>
    </header>
  );
};

export default Header;
