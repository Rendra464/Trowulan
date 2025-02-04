import React from 'react';
import { motion } from 'framer-motion';
import Slider from 'react-slick';
import "../styles/About.css";
import './AboutDetails.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const AboutDetails = () => {
    const images = [
        './gapura-wringin-lawang-696x464.jpeg',
        './candi-tikus-696x462.jpg',
        './candi-wringin-696x466.jpg',
        './museum-trowulan-650x488.jpg',
        './kemegahan-candi-brahu-di-tengah-hijaunya-rerumputan.-foto-gmap-fathoni-696x464.jpeg',
        './vihara-majapahit-696x456.jpg',
    ];

    const carouselSettings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
    };

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
                <div className="AboutDetails-image">
                    <Slider {...carouselSettings}>
                        {images.map((src, index) => (
                            <div key={index}>
                                <img src={src} alt={`Trowulan Slide ${index + 1}`} className="carousel-image" />
                            </div>
                        ))}
                    </Slider>
                </div>
                <div className="AboutDetails-text">
                    <h2>Let's find out about Trowulan!</h2>
                    <p>
                        The name "Trowulan" is taken from the name of the sub-district where the majority of the existing large structures are found. 
                        There are two opinions regarding the origin of this name. The first opinion, put forward by Henri Maclaine Pont, 
                        is of the origin of "Setra Wulan". Another opinion, mentioned in Serat Darmagandhul pupuh XX, is that there is a 
                        place called "Sastrawulan", where Brawijaya, the king of Majapahit, asked for the location of his tomb. 
                        Trowulan is a historical heritage site that includes several villages and sub-districts on the border of Mojokerto 
                        and Jombang regencies. In Trowulan, we can find a lot of historical relics which allegedly came from the Majapahit kingdom 
                        and previous kingdoms, such as a complex of residential buildings, temples that are magnificent, and a museum with 
                        a collection of many artifacts from the great kingdoms of Java. This area is also thought to be the capital of Majapahit 
                        who ruled in Java in the 13th to 16th centuries.
                    </p>
                </div>
            </div>
        </motion.section>
    );
};

export default AboutDetails;
