import React from 'react';
import './News.css';
import temple from "../assets/images/092167500-1565164733-istock-933379748-1076x605.jpg";
import trowulan from "../assets/images/screenshot-2021-05-25-indonesia-go-id-trowulan-adalah-ibu-kota-majapahit-1056x596.png";

const News = () => {
    const newsArticles = [
        {
            title: "Trowulan is the capital of Majapahit?",
            author: "Admin Indonesia.go.id",
            date: "11-11-2019",
            content:tro
                "As has been reviewed in the article Mystery of the Location of the Majapahit Kedaton, that the popularity of the archaeological area of the Trowulan Site Situs.",
            image: "path/to/image1.jpg", 
            link: "/news/trowulan-majapahit",
        },
        {
            title:
                "Trowulan, an Educational and Entertaining Historical Site of Mojokerto",
            author: "Agustina Melani",
            date: "03-09-2019",
            content:
                "Discover the beauty of Trowulan and its historical sites, an educational and entertaining destination for all ages.",
            image: "path/to/image2.jpg",
            link: "/news/trowulan-history",
        },
    ];

    return (
        <div className="news-page">
            <h1 className="news-title">Last News and Articles</h1>
            <p className="news-subtitle">
                Read the latest news about Trowulan
            </p>
            <div className="news-container">
                {newsArticles.map((article, index) => (
                    <div className="news-card" key={index}>
                        <img
                            src={article.image}
                            alt={article.title}
                            className="news-image"
                        />
                        <div className="news-content">
                            <h2 className="news-article-title">
                                {article.title}
                            </h2>
                            <p className="news-author">
                                {article.author} <span>{article.date}</span>
                            </p>
                            <p className="news-description">
                                {article.content}{" "}
                                <a href={article.link} className="read-more">
                                    Read more..
                                </a>
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default News;
