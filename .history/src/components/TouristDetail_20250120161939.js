import React from 'react';
import { useParams } from 'react-router-dom';
import "../styles/RegistrationForm.css";

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
            mapEmbed: `<iframe frameborder="0" style="border:0" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3955.3020603893187!2d112.38890421458557!3d-7.541999976543673!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e786d248d77cf8d%3A0xd345a0fadaca7698!2sCandi%20Wringin%20Lawang!5e0!3m2!1sid!2sid!4v1621766136536!5m2!1sid!2sid" allowfullscreen=""></iframe>`,
            arEmbed: `<iframe frameborder="0" style="border:0" src="https://www.vectary.com/viewer/v1/?model=dea52d30-f793-473a-963e-251d25d34aaf&amp;env=studio3&amp;turntable=2" allowfullscreen=""></iframe>`,
        },
        {
            title: "Tikus Temple",
            description:
                "Touted as the capital of the Majapahit Kingdom, the Rat Temple was found in Dukuh Dinuk, Temon Village, Trowulan District, Mojokerto Regency. If in general the temple appears above the surface of the ground, it is different from this one temple. Rat Temple was found under the surface of the ground by local residents...",
            image: candiTikus,
            mapEmbed: `<iframe frameborder="0" style="border:0" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3955.0246090614564!2d112.4010371145859!3d-7.572295676895383!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e786d1fdd9add5d%3A0xad81bb21c4b5b075!2sCandi%20Tikus!5e0!3m2!1sid!2sid!4v1621766836760!5m2!1sid!2sid" allowfullscreen=""></iframe>`,
            arEmbed: `<iframe frameborder="0" style="border:0" src="https://www.vectary.com/viewer/v1/?model=03bee784-4aa5-4cd3-9aaf-a0921cab712a&amp;env=studio3&amp;turntable=2" allowfullscreen=""></iframe>`,
        },
        {
            title: "Bajang Ratu Temple",
            description:
                "Bajang Ratu Temple or often called the Bajang Ratu gate is a temple relic of the Majapahit kingdom built in the 14th century...",
            image: bajangRatu,
            mapEmbed: `<iframe frameborder="0" style="border:0; width:100%; height:300px;" src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3955.063521374026!2d112.3963912!3d-7.568054!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e786dbd3277dd1d%3A0xd1928cb171e27a41!2sCandi%20Bajang%20Ratu!5e0!3m2!1sid!2sid!4v1621750538653!5m2!1sid!2sid" allowfullscreen=""></iframe>`,
            arEmbed: `<iframe frameborder="0" style="border:0; width:100%; height:300px;" src="https://www.vectary.com/viewer/v1/?model=5da65d21-8845-4323-8b4c-592901e14645&amp;env=studio3&amp;turntable=2" allowfullscreen=""></iframe>`,
        },
        {
            title: "Trowulan Museum",
            description:
                "Trowulan Museum is an archaeological museum located in Trowulan, Mojokerto, East Java, Indonesia. The museum was built to store a variety of artifacts...",
            image: museumTrowulan,
            mapEmbed: `<iframe frameborder="0" style="border:0" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3955.1374815085046!2d112.37843261458582!3d-7.559985376752328!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e786ce190935909%3A0xb34204a2f98df670!2sMuseum%20Majapahit!5e0!3m2!1sid!2sid!4v1621767300651!5m2!1sid!2sid" allowfullscreen=""></iframe>`,
            arEmbed: `<iframe frameborder="0" style="border:0" src="https://www.google.com/maps/embed?pb=!4v1621750760125!6m8!1m7!1sCAoSLEFGMVFpcFBlT2tBaWlYaGxjRVpPaklfV1NIR1BGV2hPekVXZ0hfY0VwWlNy!2m2!1d-7.5597941!2d112.3805278!3f85.5750035744757!4f-11.43285867243992!5f0.4000000000000002" allowfullscreen=""></iframe>`,
        },
        {
            title: "Brahu Temple",
            description:
                "Brahu Temple is one of the temples located in the archaeological site of Trowulan, the former capital of Majapahit...",
            image: brahuTemple,
            mapEmbed: `<iframe frameborder="0" style="border:0" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3955.292864167737!2d112.37215721458553!3d-7.543006076555327!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e786ce655555555%3A0xb1299504be8c8c76!2sCandi%20Brahu!5e0!3m2!1sid!2sid!4v1621753719681!5m2!1sid!2sid" allowfullscreen=""></iframe>`,
            arEmbed: `<iframe frameborder="0" style="border:0" src="https://www.vectary.com/viewer/v1/?model=dc58ee8d-4c5e-4d52-b524-57e328b5581b&amp;env=studio3&amp;turntable=2" allowfullscreen=""></iframe>`,
        },
        {
            title: "Maha Vihara Majapahit",
            description:
                "Maha Vihara Majapahit is a monastery located in Bejijong Village, Trowulan District, Mojokerto Regency, East Java Province...",
            image: viharaMajapahit,
            mapEmbed: `<iframe frameborder="0" style="border:0" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3955.1720760059397!2d112.36757561458553!3d-7.5562083767084145!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7813192a8a7ccd%3A0x5dd334ab0427f761!2sBuddha%20Tidur%20Mojokerto!5e0!3m2!1sid!2sid!4v1621765549713!5m2!1sid!2sid" allowfullscreen=""></iframe>`,
            arEmbed: `<iframe frameborder="0" style="border:0" src="https://www.vectary.com/viewer/v1/?model=15159133-2031-4c15-aa85-be3d415cae56&amp;env=studio3&amp;turntable=2" allowfullscreen=""></iframe>`,
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

        <div className="map-embed">
            <h1>Location Map</h1>
            <div
                dangerouslySetInnerHTML={{ __html: spot.mapEmbed }}
            />
        </div>

        <div className="ar-embed">
            <h1>Feature</h1>
            <div
                dangerouslySetInnerHTML={{ __html: spot.arEmbed }}
            />
        </div>
    </div>
    
    );
};

export default TouristDetail;
