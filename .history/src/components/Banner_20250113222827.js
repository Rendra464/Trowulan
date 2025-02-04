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
            position: 'relative', // Pastikan parent memiliki position relative
            backgroundImage: "url('/mbr-1920x1281.jpg')",
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            height: '100vh',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            textAlign: 'center',
            overflow: 'hidden', // Hindari elemen keluar dari area
        }}
    >

        <div
            style={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                backgroundColor: '#ffe161',
                opacity: 0.5,
                zIndex: 1,
            }}
        ></div>
            <div className="banner-text">
                <h1>Trowulan Tour</h1>
                <p>Mojokerto Regency has many relics of the former glory of the Majapahit Kingdom. <br />
                Even predicted as the center of the kingdom.</p>
            </div>
        </motion.div>
    );
}

export default Banner;