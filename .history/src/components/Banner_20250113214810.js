import React from 'react';
import './Banner.css';
import { motion } from 'framer-motion';

constb = () => {
    return (
        <motion.div
            className="hero"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
        >
            <h1>R.M. Rendra Adikara</h1>
            <p>Application Developer | Front-End & Back-End Enthusiast</p>
        </motion.div>
    );
}