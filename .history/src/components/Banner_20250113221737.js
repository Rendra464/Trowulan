import React from 'react';
import './Banner.css';
import { motion } from 'framer-motion';

const Banner = () => {
    return (
        <motion.div 
            className="Banner"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            style={{ 
                backgroundImage: "url('/mbr-1920x1281.jpg')",
                backgroundColor: "#ffe161",
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                height: '100vh',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                textAlign: 'center'
            }}
        >
            <div className="banner-text">
                <h1>Trowulan Tour</h1>
                <p>Mojokerto Regency has many relics of the former glory of the Majapahit Kingdom. <br />
                Even predicted as the center of the kingdom.</p>
            </div>
        </motion.div>
    );
}

export default Banner;