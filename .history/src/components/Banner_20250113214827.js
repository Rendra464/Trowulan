import React from 'react';
import './Banner.css';
import { motion } from 'framer-motion';

const Banner = () => {
    return (
        <motion.div
            className="hero"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
        >
        </motion.div>
    );
}