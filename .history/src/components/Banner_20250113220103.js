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
                backgroundImage: "url('https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.detik.com%2Fedu%2Fdetikpedia%2Fd-6672620%2Fteknik-menggambar-pemandangan-dengan-crayon-serta-contohnya&psig=AOvVaw3Mzt4lEou7Zh5J0YFws5jN&ust=1736866844662000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCLjnoqz78ooDFQAAAAAdAAAAABAJ')",
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                height: '100vh',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                color: '#fff',
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