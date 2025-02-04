import React from 'react';
import './Features.css';

const Features = () => {
    return (
        <section className="features-section" id="features">
            <div className="features-header">
                <h2>Features</h2>
            </div>
            <div className="features-container">
                <div className="feature-card">
                    <div className="feature-icon">
                        <i className="fas fa-map-marker-alt"></i>
                    </div>
                    <h3>Maps</h3>
                    <p>
                        Explore Trowulan Tourism with Maps makes it easy for you to find interesting places!
                    </p>
                </div>
                <div className="feature-card">
                    <div className="feature-icon">
                        <i className="fas fa-cube"></i>
                    </div>
                    <h3>Augmented Reality</h3>
                    <p>
                        Use the Augmented Reality feature to make the new travel experience even more amazing!
                    </p>
                </div>
                <div className="feature-card">
                    <div className="feature-icon">
                        <i className="fas fa-video"></i>
                    </div>
                    <h3>360 Camera</h3>
                    <p>
                        Search tourist attractions only with your electronic device. You don’t have to come to a tourist spot!
                    </p>
                </div>
            </div>
        </section>
    );
};

export default Features;
