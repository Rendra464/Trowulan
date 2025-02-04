import React from 'react';
import './Header.css';

const Header = () => {
    return (
        <header className="header">
            <div className="header-logo">
                <span className="app-name">Trowulan Tour</span>
            </div>
            <nav className="nav-menu">
            <div
                className="nav-item dropdown"
                onMouseEnter={() => setDropdownVisible(true)}
                onMouseLeave={() => setDropdownVisible(false)}
                >
                <span className="dropdown-title">Tourist Attraction</span>
                {dropdownVisible && (
                    <div className="dropdown-menu">
                    <a href="#attraction1" className="dropdown-item">Attraction 1</a>
                    <a href="#attraction2" className="dropdown-item">Attraction 2</a>
                    <a href="#attraction3" className="dropdown-item">Attraction 3</a>
                    </div>
                )}
                </div>
                <a href="#features" className="nav-item">Features</a>
                <a href="#news" className="nav-item">News</a>
                <button className="nav-button">Tours Package</button>
            </nav>
        </header>
    );
};

export default Header;
