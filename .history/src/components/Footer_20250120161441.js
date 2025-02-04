import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-container">
                <div className="footer-Desc">
                    <h2 className="footer-title" style={{textAlign:}}>Trowulan Tour</h2>
                    <p className="footer-description">Ojo lali mampir lur!</p>
                </div>
                <div className="footer-section">
                    <h3 className="footer-heading">News</h3>
                    <ul className="footer-links">
                        <li><a href="/faq">About us</a></li>
                        <li><a href="/GetInTouch">Get In Touch</a></li>
                        <li><a href="/news">News</a></li>
                    </ul>
                </div>
                <div className="footer-section">
                    <h3 className="footer-heading">Categories</h3>
                    <ul className="footer-links">
                        <li><a href="#maps">Maps</a></li>
                        <li><a href="#ar">Augmented Reality</a></li>
                        <li><a href="#video">360 Video</a></li>
                    </ul>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
