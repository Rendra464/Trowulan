import React from 'react';
import './Package.css';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import backgroundImage from "../assets/images/mbr-1-1920x1281.jpg";

const Package = () => {
    return (
        <motion.section
            className="about"
            id="about"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            >

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

            <div className="video-container">
                <div className="vidoe-text">
                    <h2>Do you know what Trowulan is?</h2>
                    <p>
                        Trowulan is a historical heritage site that includes several villages and sub-districts 
                        on the border of Mojokerto and Jombang regencies. In Trowulan, we can find a lot of historical relics 
                        which allegedly came from the Majapahit kingdom and previous kingdoms.
                    </p>
                    <Link to="/about-details" className="about-button">
                        Learn more
                    </Link>
                </div>
                <div className="about-image">
                    <img 
                        src="/hipwee-candi-bajang-ratu-888x592.jpg"
                        alt="Trowulan" 
                    />
                </div>
            </div>
        </motion.section>
    );
};

export default Package;
