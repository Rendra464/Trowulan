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
        "./hipwee-candi-bajang-ratu-888x592.jpg",
        "./gapura-wringin-lawang-696x464.jpeg",
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
                        The name "Trowulan" is taken from the name of the sub-district where the majority of the existing large structures are found. There are two opinions regarding the origin of this name. The first opinion, put forward by Henri Maclaine Pont, is of the origin of "Setra Wulan". Another opinion, mentioned in Serat Darmagandhul pupuh XX, is that there is a place called "Sastrawulan", where Brawijaya, the king of Majapahit, asked for the location of his tomb. Trowulan is a historical heritage site that includes several villages and sub-districts on the border of Mojokerto and Jombang regencies, in Trowulan we can find a lot of historical relics which allegedly came from the Majapahit kingdom and previous kingdoms, such as a complex of residential buildings, temples that magnificent and a museum with a collection of many artifacts from the great kingdoms of Java. This area is also thought to be the capital of Majapahit who ruled in Java in the 13th to 16th centuries. 
                    </p>
                </div>
                <div className="AboutDetails-image">
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
