import React, { useState } from 'react';
import './Header.css';

const Header = () => {
  const [dropdownVisible, setDropdownVisible] = useState(false);

  const toggleDropdown = () => {
    setDropdownVisible(!dropdownVisible);
  };

    return (
    <header className="header">
        <div className="header-logo">
        <span className="app-name">Trowulan Tour</span>
      </div>
      <nav className="nav-menu">
        {/* Dropdown untuk Tourist Attraction */}
        <div
          className="nav-item dropdown"
          onMouseEnter={() => setDropdownVisible(true)}
          onMouseLeave={() => setDropdownVisible(false)}
        >
          <span className="dropdown-title">Tourist Attraction ▼</span>
          {dropdownVisible && (
            <div className="dropdown-menu">
              <a href="#candi-wringin-lawang" className="dropdown-item">Candi Wringin Lawang</a>
              <a href="#candi-tikus" className="dropdown-item">Candi Tikus</a>
              <a href="#candi-bajang-ratu" className="dropdown-item">Candi Bajang Ratu</a>
              <a href="#museum-trowulan" className="dropdown-item">Museum Trowulan</a>
              <a href="#candi-brahu" className="dropdown-item">Candi Brahu</a>
              <a href="#maha-vihara-majapahit" className="dropdown-item">Maha Vihara Majapahit</a>
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
