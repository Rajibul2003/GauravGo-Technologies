// Navbar.jsx
import React, { useState } from 'react';
import './Navbar.css';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className='nav'>
      <img src="src/assets/Gauravgologo.png" alt="Logo" className="nav__logo" />
      <a href="#home" className='nav__brand'>GauravGo Games Studio</a>
      <ul className={`nav__menu ${isMenuOpen ? 'nav__menu--active' : ''}`}>
        <li className="nav__item"><a href="#home" className="nav__link">Home</a></li>
        <li className="nav__item"><a href="#games" className="nav__link">Our Games</a></li>
        <li className="nav__item"><a href="#advertisers" className="nav__link">Advertiser</a></li>
        <li className="nav__item"><a href="#contact" className="nav__link">Contact Us</a></li>
      </ul>
      <div className="nav__search">
        <input type="text" placeholder="Search..." className="nav__search-input" />
      </div>
      <div className="nav__toggler" onClick={handleToggle}>
        <div className="line1"></div>
        <div className="line2"></div>
        <div className="line3"></div>
      </div>
    </div>
  );
}

export default Navbar;
