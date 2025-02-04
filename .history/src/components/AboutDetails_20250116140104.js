import React from 'react';
import { motion } from 'framer-motion';
import Slider from 'react-slick'; // Import carousel library
import './AboutDetails.css';

const AboutDetails = () => {
    const carouselSettings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
    };

    const images = [
        "/hipwee-candi-bajang-ratu-888x592.jpg",
        "/candi-wringin-lawang.jpg",
        "/candi-tikus.jpg",
    ];

    return (
        <motion.section
            className="AboutDetails"
            id="AboutDetails"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
        >
            <div className="AboutDetails-container">
                <div className="AboutDetails-text">
                    <h2>Let's find out about Trowulan! </h2>
                    <p>
                        The name "Trowulan" is taken from the name of the sub-district where the majority of the existing large structures are found...
                        (content truncated for brevity)
                    </p>
                </div>
                <div className="AboutDetails-image">
                    {/* Carousel with react-slick */}
                    <Slider {...carouselSettings}>
                        {images.map((src, index) => (
                            <div key={index}>
                                <img src={src} alt={`Trowulan Slide ${index + 1}`} />
                            </div>
                        ))}
                    </Slider>
                </div>
            </div>
        </motion.section>
    );
};

export default AboutDetails;
