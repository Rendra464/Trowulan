import React from 'react';
import './Package.css';
import backgroundImage from "../assets/images/mbr-1-1920x1281.jpg";

const Package = () => {
    return (
        <div
            className="package-container"
            style={{ backgroundImage: `url(${backgroundImage})` }}
        >
            <div className="package-content">
        <div class="row justify-content-end">
            <div class="col-12 col-lg-6">
                <h1 class="mbr-section-title mbr-fonts-style mb-3 display-1"><strong>Ready To Explore More Place With Us?</strong></h1>
                
                <p class="mbr-text mbr-fonts-style display-7">Scroll down to find best price.</p>
                
            </div>
        </div>
    
            </div>
        </div>
    );
};

export default Package;
