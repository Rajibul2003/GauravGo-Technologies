import React, { useState } from 'react';
import './Navbar.css';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const handleToggle = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <div className='nav'>
                <img src="src/assets/Gauravgologo.png" alt="" className="nav__logo" />
            <a href="#" className='nav__brand'>
                GauravGo Games Studio 
            </a>
            <ul className={`nav__menu ${isMenuOpen ? 'nav__menu--active' : ''}`}>
                <li className="nav__item"><a href="#" className="nav__link">Home</a></li>
                <li className="nav__item"><a href="#" className="nav__link">Our Games</a></li>
                <li className="nav__item"><a href="#" className="nav__link">Advertiser</a></li>
                <li className="nav__item"><a href="#" className="nav__link">Contact Us</a></li>
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
