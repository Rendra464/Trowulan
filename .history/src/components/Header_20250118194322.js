import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Header.css';

const Header = () => {
    const [dropdownVisible, setDropdownVisible] = useState(false);
    const [menuVisible, setMenuVisible] = useState(false);
    const location = useLocation();

    const toggleDropdown = () => {
        setDropdownVisible(!dropdownVisible);
    };

    const toggleMenu = () => {
        setMenuVisible(!menuVisible);
    };

    const scrollToSection = (id) => {
        const section = document.querySelector(id);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
        }
    };

    const handleFeaturesClick = (e) => {
        e.preventDefault();
        if (location.pathname !== '/') {
            window.location.assign(`/features`);
        } else {
            scrollToSection('/features');
        }
    };

    return (
        <header className="header">
            <div className="header-container">
                <Link to="/" className="header-logo">
                    <span className="app-name">Trowulan Tour</span>
                </Link>
                <div
                    className={`burger-menu ${menuVisible ? 'active' : ''}`}
                    onClick={toggleMenu}
                    aria-label="Toggle navigation menu"
                    aria-expanded={menuVisible}
                >
                    <span className="burger-line"></span>
                    <span className="burger-line"></span>
                    <span className="burger-line"></span>
                </div>
                <nav className={`nav-menu ${menuVisible ? 'visible' : ''}`}>
                    <div
                        className="nav-item dropdown"
                        onClick={toggleDropdown}
                        aria-haspopup="true"
                        aria-expanded={dropdownVisible}
                    >
                        <span className="dropdown-title">Tourist Attraction</span>
                        {dropdownVisible && (
                            <div className="dropdown-menu">
                                <Link to="/details/Wringin-Lawang-Temple" className="dropdown-item">
                                    Candi Wringin Lawang
                                </Link>
                                <Link to="/details/Tikus-Temple" className="dropdown-item">
                                    Candi Tikus
                                </Link>
                                <Link to="/details/Bajang-Ratu-Temple" className="dropdown-item">
                                    Candi Bajang Ratu
                                </Link>
                                <Link to="/details/Trowulan-Museum" className="dropdown-item">
                                    Museum Trowulan
                                </Link>
                                <Link to="/details/Brahu-Temple" className="dropdown-item">
                                    Candi Brahu
                                </Link>
                                <Link to="/details/Maha-Vihara-Majapahit" className="dropdown-item">
                                    Maha Vihara Majapahit
                                </Link>
                            </div>
                        )}
                    </div>
                    <a href="/features" onClick={handleFeaturesClick} className="nav-item">
                        Features
                    </a>
                    <Link to="/news" className="nav-item">
                        News
                    </Link>
                    <Link to="/tours" className="nav-button">
                        Tours Package
                    </Link>
                </nav>
            </div>
        </header>
    );
};

export default Header;
