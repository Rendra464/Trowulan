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

    // Fungsi untuk menggulir ke bagian tertentu
    const scrollToSection = (id) => {
        const section = document.querySelector(id);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
        }
    };

    // Navigasi dan scroll ke bagian "Features"
    const handleFeaturesClick = (e) => {
        e.preventDefault();
        if (location.pathname !== '/') {
            // Navigasi ke halaman utama dengan state untuk scroll
            window.location.assign(`/#features`);
        } else {
            scrollToSection('#features');
        }
    };

    return (
        <header className="header">
            <div className="header-container">
                {/* Logo */}
                <Link to="/" className="header-logo">
                    <span className="app-name">Trowulan Tour</span>
                </Link>

                {/* Burger Menu */}
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

                {/* Navigation Menu */}
                <nav className={`nav-menu ${menuVisible ? 'visible' : ''}`}>
                    {/* Dropdown Menu */}
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

                    {/* Navigasi ke bagian tertentu */}
                    <a
                        href="#features"
                        onClick={handleFeaturesClick}
                        className="nav-item"
                    >
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
