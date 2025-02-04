import React from 'react';
import './About.css';

const About = () => {
    return (
        <motion.section
            className="about"
            id="about"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
        >
            <h2 className="about-title">About Me</h2>
            <p className="about-description">
                I am a Computer Science graduate from Bina Nusantara University with a passion for web development. 
                Skilled in WordPress, .NET, C#, JavaScript, and PHP, I focus on creating responsive and user-friendly websites. 
                My experience includes managing website content, customizing themes, integrating plugins, and collaborating with 
                designers to deliver functional and visually appealing solutions. 
            </p>
            <p className="about-description">
                I thrive in both independent work and team environments, ensuring projects are completed efficiently and effectively. 
                I am eager to contribute my skills to impactful web or application development projects and am open to opportunities 
                in tech companies, startups, or freelance work.
            </p>
        </motion.section>
        <section className="about-section">
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
        </section>
    );
};

export default About;
