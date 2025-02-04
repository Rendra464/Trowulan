import React from 'react';
import { useParams } from 'react-router-dom';
import gapuraWringinLawang from "./assets/images/gapura-wringin-lawang-696x464.jpeg";
import candiTikus from "./assets/images/candi-tikus-696x462.jpg";
import bajangRatu from "./images/candi-wringin-696x466.jpg";
import museumTrowulan from "./images/museum-trowulan-650x488.jpg";
import brahuTemple from "./images/kemegahan-candi-brahu-di-tengah-hijaunya-rerumputan.-foto-gmap-fathoni-696x464.jpeg";
import viharaMajapahit from "./images/vihara-majapahit-696x456.jpg";

const TouristDetail = () => {
    const { name } = useParams();
    const spots = [
        {
            title: "Wringin Lawang Temple",
            description:
                "Wringin Lawang Gate is a 14th-century Majapahit heritage gate located in the District...",
            image: gapuraWringinLawang,
        },
        {
            title: "Tikus Temple",
            description:
                "Touted as the Capital of the Majapahit Kingdom, Candi Tikus found in Dukuh Dinuk, Temon Village, Trowulan District...",
            image: candiTikus,
        },
        {
            title: "Bajang Ratu Temple",
            description:
                "Bajang Ratu Temple or often called the Bajang Ratu gate is a temple relic of the Majapahit kingdom...",
            image: bajangRatu,
        },
        {
            title: "Trowulan Museum",
            description:
                "Trowulan Museum is an archaeological museum located in Trowulan, Mojokerto, East Java, Indonesia...",
            image: museumTrowulan,
        },
        {
            title: "Brahu Temple",
            description:
                "Brahu Temple is one of the temples located in Trowulan archaeological site area, the former capital of Majapahit...",
            image: brahuTemple,
        },
        {
            title: "Maha Vihara Majapahit",
            description:
                "Maha Vihara Majapahit is a monastery located in Bejijong Village, Trowulan District, Mojokerto Regency.",
            image: viharaMajapahit,
        },
    ];

    const spot = spots.find((spot) => spot.title === name.replaceAll("-", " "));

    if (!spot) {
        return <p>Tourist spot not found!</p>;
    }

    return (
    <div className="detail-container">
        <h1>{spot.title}</h1>
        <img src={spot.image} alt={spot.title} className="detail-image" />
        <p>{spot.description}</p>
    </div>
    );
};

export default TouristDetail;
