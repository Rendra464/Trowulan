import React from 'react';
import './Header.css';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';

const Header = () => {
    return (
        <header className="header">
            <div className="header-logo">
                <span className="app-name">Trowulan Tour</span>
            </div>
            <nav className="nav-menu">
            <DropdownButton id="dropdown-basic-button" title="Dropdown button">
      <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
      <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
      <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
    </DropdownButton>
                <a href="#features" className="nav-item">Features</a>
                <a href="#news" className="nav-item">News</a>
                <button className="nav-button">Tours Package</button>
            </nav>
        </header>
    );
};

export default Header;
