import React from 'react';
import { useParams } from 'react-router-dom';
import './TouristDetail.css';
import gapuraWringinLawang from "../assets/images/gapura-wringin-lawang-696x464.jpeg";
import candiTikus from "../assets/images/candi-tikus-696x462.jpg";
import bajangRatu from "../assets/images/candi-wringin-696x466.jpg";
import museumTrowulan from "../assets/images/museum-trowulan-650x488.jpg";
import brahuTemple from "../assets/images/kemegahan-candi-brahu-di-tengah-hijaunya-rerumputan.-foto-gmap-fathoni-696x464.jpeg";
import viharaMajapahit from "../assets/images/vihara-majapahit-696x456.jpg";


const TouristDetail = () => {
    const { name } = useParams();
    const spots = [
        {
            title: "Wringin Lawang Temple",
            description:
                "Wringin Lawang Gate is a 14th century Majapahit heritage gate located in Trowulan District, Mojokerto Regency, East Java, Indonesia. Most historians agree that this gate is the entrance to an important building complex in the Majapahit capital. Allegations about the original function of this building invite a lot of speculation, one of the most popular is that this gate is thought to be the entrance to the residence of Mahapatih Gajah Mada.   ",
            image: gapuraWringinLawang,
        },
        {
            title: "Tikus Temple",
            description:
                "Touted as the capital of the Majapahit Kingdom, the Rat Temple was found in Dukuh Dinuk, Temon Village, Trowulan District, Mojokerto Regency. If in general the temple appears above the surface of the ground, it is different from this one temple. Rat Temple was found under the surface of the ground by local residents. Initially a number of residents were disturbed by the number of rat pests that damaged agriculture so that the yield of farmers decreased drastically.Until 1914, the Regent of Mojokerto, RAA Kromojoyo Adinegoro at that time ordered the village apparatus to cut down the existing rats, at the time of the pursuit of the rats of the village apparatus saw the rats in the hole in the mound of the ground. Because he wanted to eradicate all the rats, Kromojoyo ordered that the mound was also dismantled and found a temple called the Rat Temple. ",
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
