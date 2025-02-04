import React from 'react';
import './Package.css';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import backgroundImage from "../assets/images/mbr-1-1920x1281.jpg";

const Package = () => {
    return (
        <motion.section
            className="package"
            id="package"
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
                <div className="video-text">
                    <h1>Do you know what Trowulan is?</h1>
                    <p>
                        Trowulan is a historical heritage site that includes several villages and sub-districts 
                        on the border of Mojokerto and Jombang regencies. In Trowulan, we can find a lot of historical relics 
                        which allegedly came from the Majapahit kingdom and previous kingdoms.
                    </p>
                </div>
                <div className="about-video">
                    <iframe
                        src="https://www.youtube.com/embed/shGjbpO_o1s?rel=0&amp;showinfo=0&amp;autoplay=1&amp;loop=0"
                        title="Trowulan Video"
                        allow="accelerometer; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                    ></iframe>
                </div>
            </div>

            
        </motion.section>
    );
};

export default Package;
