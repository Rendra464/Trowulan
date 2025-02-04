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
                "Wringin Lawang Gate is a 14th century Majapahit heritage gate located in Trowulan District, Mojokerto Regency, East Java, Indonesia. Most historians agree that this gate is the entrance to an important building complex in the Majapahit capital. Allegations about the original function of this building invite a lot of speculation, one of the most popular is that this gate is thought to be the entrance to the residence of Mahapatih Gajah Mada.",
            image: gapuraWringinLawang,
            mapEmbed: `<iframe frameborder="0" style="border:0; width:100%; height:300px;" src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3955.063521374026!2d112.3963912!3d-7.568054!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e786dbd3277dd1d%3A0xd1928cb171e27a41!2sCandi%20Bajang%20Ratu!5e0!3m2!1sid!2sid!4v1621750538653!5m2!1sid!2sid" allowfullscreen=""></iframe>`,
            arEmbed: `<iframe frameborder="0" style="border:0; width:100%; height:300px;" src="https://www.vectary.com/viewer/v1/?model=5da65d21-8845-4323-8b4c-592901e14645&amp;env=studio3&amp;turntable=2" allowfullscreen=""></iframe>`,
        },
        {
            title: "Tikus Temple",
            description:
                "Touted as the capital of the Majapahit Kingdom, the Rat Temple was found in Dukuh Dinuk, Temon Village, Trowulan District, Mojokerto Regency. If in general the temple appears above the surface of the ground, it is different from this one temple. Rat Temple was found under the surface of the ground by local residents...",
            image: candiTikus,
            mapLink: "https://www.google.com/maps/place/Tikus+Temple",
            arLink: "https://example.com/ar/tikus-temple",
        },
        {
            title: "Bajang Ratu Temple",
            description:
                "Bajang Ratu Temple or often called the Bajang Ratu gate is a temple relic of the Majapahit kingdom built in the 14th century...",
            image: bajangRatu,
            mapLink: "https://www.google.com/maps/place/Bajang+Ratu+Temple",
            arLink: "https://example.com/ar/bajang-ratu",
        },
        {
            title: "Trowulan Museum",
            description:
                "Trowulan Museum is an archaeological museum located in Trowulan, Mojokerto, East Java, Indonesia. The museum was built to store a variety of artifacts...",
            image: museumTrowulan,
            mapLink: "https://www.google.com/maps/place/Trowulan+Museum",
            arLink: "https://example.com/ar/trowulan-museum",
        },
        {
            title: "Brahu Temple",
            description:
                "Brahu Temple is one of the temples located in the archaeological site of Trowulan, the former capital of Majapahit...",
            image: brahuTemple,
            mapLink: "https://www.google.com/maps/place/Brahu+Temple",
            arLink: "https://example.com/ar/brahu-temple",
        },
        {
            title: "Maha Vihara Majapahit",
            description:
                "Maha Vihara Majapahit is a monastery located in Bejijong Village, Trowulan District, Mojokerto Regency, East Java Province...",
            image: viharaMajapahit,
            mapLink: "https://www.google.com/maps/place/Maha+Vihara+Majapahit",
            arLink: "https://example.com/ar/maha-vihara-majapahit",
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
