import React from "react";
import { Link } from "react-router-dom";
import "./Touristspot.css";

const Touristspot = () => {
    const spots = [
        {
            title: "Wringin Lawang Temple",
            description:
            "Wringin Lawang Gate is a 14th-century Majapahit heritage gate located in the District...",
            image: "./gapura-wringin-lawang-696x464.jpeg",
        },
        {
            title: "Tikus Temple",
            description:
            "Touted as the Capital of the Majapahit Kingdom, Candi Tikus found in Dukuh Dinuk, Temon Village, Trowulan District...",
            image: "./candi-tikus-696x462.jpg",
        },
        {
            title: "Bajang Ratu Temple",
            description:
            "Bajang Ratu Temple or often called the Bajang Ratu gate is a temple relic of the Majapahit kingdom...",
            image: "/candi-wringin-696x466.jpg",
        },
        {
            title: "Trowulan Museum ",
            description:
            "Trowulan Museum is an archaeological museum located in Trowulan, Mojokerto, East Java, Indonesia...",
            image: "./museum-trowulan-650x488.jpg",
        },
        {
            title: "Brahu Temple ",
            description:
            "Brahu Temple is one of the temples located in Trowulan archaeological site area, the former capital of Majapahit...",
            image: "./kemegahan-candi-brahu-di-tengah-hijaunya-rerumputan.-foto-gmap-fathoni-696x464.jpeg",
        },
        {
            title: "Maha Vihara Majapahit",
            description:
            "Maha Vihara Majapahit is a monastery located in Bejijong Village, Trowulan District, Mojokerto Regency.",
            image: "./vihara-majapahit-696x456.jpg",
        },
    ];

    return (
        <section className="tourist-spot">
            <h2 className="section-title">Tourist Spot</h2>
            <div className="spot-grid">
            {spots.map((spot, index) => (
                <div className="spot-card" key={index}>
                <img
                    src={spot.image}
                    alt={spot.title}
                    className="spot-image"
                />
                <div className="spot-content">
                    <h3>{spot.title}</h3>
                    <p>{spot.description}</p>
                    <Link
                    to={`/details/${spot.title.replaceAll(" ", "-")}`}
                    className="learn-more-btn"
                    >
                    Learn More &gt;
                    </Link>
                </div>
                </div>
            ))}
            </div>
        </section>
    );
};

export default Touristspot;
