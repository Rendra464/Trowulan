import React from 'react';
import './Header.css';

const Header = () => {
    const [open, setOpen] = React.useState(false);

    const handleOpen = () => {
        setOpen(!open);
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
                <button className="nav-button">Tours Package</button>
            </nav>
        </header>
    );
};

export default Header;
