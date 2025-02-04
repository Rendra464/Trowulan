import React from 'react';
import { motion } from 'framer-motion';
import './About.css';

const About = () => {
    return (
        <motion.section
            className="about"
            id="about"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
        >
            <div className="about-container">
                <div className="about-text">
                    <h2>Do you know what Trowulan is?</h2>
                    <p>
                        Trowulan is a historical heritage site that includes several villages and sub-districts 
                        on the border of Mojokerto and Jombang regencies. In Trowulan, we can find a lot of historical relics 
                        which allegedly came from the Majapahit kingdom and previous kingdoms.
                    </p>
                    <button className="about-button">Learn more</button>
                </div>
                <div className="about-image">
                    <img 
                        src="/path-to-your-image/trowulan-image.jpg" 
                        alt="Trowulan" 
                    />
                </div>
            </div>
        </motion.section>
    );
};

export default About;
