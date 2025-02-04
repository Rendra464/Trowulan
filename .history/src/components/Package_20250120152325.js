import React from 'react';
import './Package.css';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaCoffee, FaTicketAlt, FaShuttleVan, FaSmile } from "react-icons/fa";
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
                    <h1>Introduction Video</h1>
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

            <div className="steps-section">
                <h2 className="steps-title">Steps</h2>
                <div className="steps-container">
                    <div className="step">
                        <div className="step-circle">1</div>
                        <p className="step-description">Choose Package</p>
                    </div>
                    <div className="step-arrow">→</div>
                    <div className="step">
                        <div className="step-circle">2</div>
                        <p className="step-description">Fill Form</p>
                    </div>
                    <div className="step-arrow">→</div>
                    <div className="step">
                        <div className="step-circle">3</div>
                        <p className="step-description">Confirm and Payment</p>
                    </div>
                </div>
            </div>

            <div className="package-cards">
                <div className="card">
                    <h3 className="card-title">One person package</h3>
                    <p className="card-price">IDR 300K</p>
                    <ul className="card-details" style={{padding: "27px 0"}}>
                        <li>Tour guide and Driver</li>
                        <li>Include food and drink</li>
                        <li>Accommodation for one night</li>
                        
                    </ul>
                    <button className="card-button">Get started</button>
                </div>
                <div className="card">
                    <h3 className="card-title">Minibus package</h3>
                    <p className="card-price">IDR 3M</p>
                    <ul className="card-details">
                        <li>Up to 13 person</li>
                        <li>Include food and drink</li>
                        <li>Tour guide and Driver</li>
                        <li>Accommodation for one night</li>
                    </ul>
                    <button className="card-button">Get started</button>
                </div>
                <div className="card">
                    <h3 className="card-title">Bus package</h3>
                    <p className="card-price">IDR 13M</p>
                    <ul className="card-details">
                        <li>Up to 50 person</li>
                        <li>Include food and drink</li>
                        <li>Tour Guide and Driver</li>
                        <li>Accommodation for one night</li>
                    </ul>
                    <button className="card-button">Get started</button>
                </div>
            </div>

            <div className="features">
            <h2 className="features-title">Features</h2>
            <div className="features-container">
                <div className="feature-item">
                    <FaCoffee className="feature-icon" />
                    <p>Drinks, Food and Accommodation</p>
                </div>
                <div className="feature-item">
                    <FaTicketAlt className="feature-icon" />
                    <p>Tour Ticket</p>
                </div>
                <div className="feature-item">
                    <FaShuttleVan className="feature-icon" />
                    <p>Transportation including pickup and drop off</p>
                </div>
                <div className="feature-item">
                    <FaSmile className="feature-icon" />
                    <p>Professional Driver and Tour Guide</p>
                </div>
            </div>
        </div>
                        
        </motion.section>
    );
};

export default Package;
