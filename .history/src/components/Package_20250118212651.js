import React from 'react';
import './Package.css';
import backgroundImage from './background.jpg'; // Pastikan mengganti dengan path gambar Anda

const Package = () => {
    return (
        <div
            className="package-container"
            style={{ backgroundImage: `url(${backgroundImage})` }}
        >
            <div className="package-content">
                <h1 className="package-title">
                    Ready To Explore More Place With Us?
                </h1>
                <p className="package-subtitle">
                    Scroll down to find the best price.
                </p>
            </div>
        </div>
    );
};

export default Package;
