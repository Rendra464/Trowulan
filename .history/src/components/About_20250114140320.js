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
                I am a Computer Science graduate from Bina Nusantara University with a passion for web development. 
                Skilled in WordPress, .NET, C#, JavaScript, and PHP, I focus on creating responsive and user-friendly websites. 
                My experience includes managing website content, customizing themes, integrating plugins, and collaborating with 
                designers to deliver functional and visually appealing solutions. 
            </p>
            <p className="about-description">
                
            </p>
        </motion.section>
    );
};

export default About;
