import React from 'react';
import { useParams } from 'react-router-dom';

const TouristDetail = () => {
  const { name } = useParams();

  // Data candi (sama dengan yang di `Touristspot.js`)
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

  // Cari data berdasarkan nama
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
