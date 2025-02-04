import React from 'react';
import './About.css';
import { motion } from 'framer-motion';

const About = () => {
    return (
        <motion.section
            className="about"
            id="about"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
        >
            <h2 className="about-title">Do you know what Trowulan is? </h2>
            <p className="about-description">
                
            </p>
            <p className="about-description">
                
            </p>
        </motion.section>
    );
};

export default About;
