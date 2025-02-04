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
                "Touted as the capital of the Majapahit Kingdom, the Rat Temple was found in Dukuh Dinuk, Temon Village, Trowulan District, Mojokerto Regency. If in general the temple appears above the surface of the ground, it is different from this one temple. Rat Temple was found under the surface of the ground by local residents. Initially a number of residents were disturbed by the number of rat pests that damaged agriculture so that the yield of farmers decreased drastically. Until 1914, the Regent of Mojokerto, RAA Kromojoyo Adinegoro at that time ordered the village apparatus to cut down the existing rats, at the time of the pursuit of the rats of the village apparatus saw the rats in the hole in the mound of the ground. Because he wanted to eradicate all the rats, Kromojoyo ordered that the mound was also dismantled and found a temple called the Rat Temple. ",
            image: candiTikus,
        },
        {
            title: "Bajang Ratu Temple",
            description:
                "Bajang Ratu Temple or often called gapura pura pura Ratu is a temple relics of the Majapahit kingdom built in the 14th century. Called the gate of the queen, because this temple has a shape in the form of a large gate. This gate is functioned as the back door of the kingdom as well as a sacred building to commemorate the death of King Jayanegara. Until now it has become a culture for pilgrimen to pass this temple or gapura when they mourn people die. ",
            image: bajangRatu,
        },
        {
            title: "Trowulan Museum",
            description:
                "Trowulan Museum is an archaeological museum located in Trowulan, Mojokerto, East Java, Indonesia. The museum was built to store a variety of artifacts and archaeological finds found around Trowulan. This place is one of the most important historical locations in Indonesia related to the history of the Majapahit kingdom. Most of these museum collections are from the Majapahit kingdom, but the collection also includes various historical eras in East Java, such as the Kahuripan, Kediri, and Singhasari kingdoms. The museum is located on the west side of the Segaran pond. Trowulan Museum is a museum that has a collection of relics dating from the most complete Majapahit period in Indonesia. ",
            image: museumTrowulan,
        },
        {
            title: "Brahu Temple",
            description:
                "Brahu Temple is one of the temples located in the archaeological site of Trowulan, the former capital of Majapahit. To be precise, this temple is located in Jambu Mente Hamlet, Bejijong Village, Trowulan District, Mojokerto Regency, East Java. Brahu Temple was built in Buddhist style and culture. It is estimated that this temple was founded in the 15th century AD although there are still differences of opinion regarding this. Some say that this temple is much older than other temples around Trowulan. ",
            image: brahuTemple,
        },
        {
            title: "Maha Vihara Majapahit",
            description:
                "Maha Monataya Mojopahit is a monah located in Bejijong Village, Trowulan District, Mojokerto Regency, East Java Province. This monece began to be built on an area of 20,000 square meters with the main building in Javanese architecture and roofed joglo. The mony was built in 1987 and was inaugurated on December 31, 1989.In this Mojopahit Monastery there is a Sleeping Buddha Statue which is now one of the tourist icons of Mojokerto. The Gautama Buddha statue is 22 meters long, 6 meters wide, and 4.5 meters high. This statue became the largest Buddha statue in Indonesia and the third largest in Southeast Asia. ",
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
