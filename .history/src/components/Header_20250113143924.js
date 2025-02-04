import React from 'react';
import './Header.css';

const Header = () => {
    const scrollToSection = (id) => {
        const section = document.querySelector(id);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <header className="header">
            <div className="header-logo">
                <span className="app-name">Trowulan Tour</span>
            </div>
            <nav className="nav-menu">
                <a href="#tourist-attraction" className="nav-item">Tourist Attraction</a>
                <a href="#features" className="nav-item">Features</a>
                <a href="#news" className="nav-item">News</a>
                <div class="navbar-buttons mbr-section-btn"><a class="btn btn-warning display-4" href="page12.html">Tours Package</a></div>
            </nav>
        </header>
    );
};

export default Header;
