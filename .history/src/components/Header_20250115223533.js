import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
    const [dropdownVisible, setDropdownVisible] = useState(false);
    const [menuVisible, setMenuVisible] = useState(false);

    const toggleMenu = () => {
        setMenuVisible(!menuVisible);
    };

    return (
        <header className="header">
            <div className="header-container">
                <div className="header-logo">
                    <span className="app-name">Trowulan Tour</span>
                </div>
                <div className="burger-menu" onClick={toggleMenu}>
                    <span className="burger-line"></span>
                    <span className="burger-line"></span>
                    <span className="burger-line"></span>
                </div>
                <nav className={`nav-menu ${menuVisible ? 'visible' : ''}`}>
                    <div
                        className="nav-item dropdown"
                        onMouseEnter={() => setDropdownVisible(true)}
                        onMouseLeave={() => setDropdownVisible(false)}
                    >
                        <span className="dropdown-title">Tourist Attraction ▼</span>
                        {dropdownVisible && (
                            <div className="dropdown-menu">
                                <Link to="/details/Wringin-Lawang-Temple" className="dropdown-item">Candi Wringin Lawang</Link>
                                <Link to="/details/Tikus-Temple" className="dropdown-item">Candi Tikus</Link>
                                <Link to="/details/Bajang-Ratu-Temple" className="dropdown-item">Candi Bajang Ratu</Link>
                                <Link to="/details/museum-trowulan" className="dropdown-item">Museum Trowulan</Link>
                                <Link to="/details/candi-brahu" className="dropdown-item">Candi Brahu</Link>
                                <Link to="/details/maha-vihara-majapahit" className="dropdown-item">Maha Vihara Majapahit</Link>
                            </div>
                        )}
                    </div>
                    <a href="#features" className="nav-item">Features</a>
                    <a href="#news" className="nav-item">News</a>
                    <button className="nav-button">Tours Package</button>
                </nav>
            </div>
        </header>
    );
};

export default Header;
