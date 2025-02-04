import React from "react";
import "./Touristspot.css";

const Touristspot = () => {
    const spots = [
        {
        title: "Wringin Lawang Temple",
        description:
            "Wringin Lawang Gate is a 14th-century Majapahit heritage gate located in the District...",
        image: "C:\Users\rendr\source\repos\trowulan\public\gapura-wringin-lawang-696x464.jpeg",
        },
        {
        title: "Tikus Temple",
        description:
            "Touted as the Capital of the Majapahit Kingdom, Candi Tikus found in Dukuh Dinuk, Temon Village, Trowulan District...",
        image: "/path-to-your-image/tikus-temple.jpg",
        },
        {
        title: "Bajang Ratu Temple",
        description:
            "Bajang Ratu Temple or often called the Bajang Ratu gate is a temple relic of the Majapahit kingdom...",
        image: "/path-to-your-image/bajang-ratu.jpg",
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
                <button className="learn-more-btn">Learn More &gt;</button>
                </div>
            </div>
            ))}
        </div>
        </section>
    );
};

export default Touristspot;
