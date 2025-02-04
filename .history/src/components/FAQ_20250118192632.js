import React, { useState } from 'react';
import './FAQ.css';

const FAQ = () => {
    const [activeIndex, setActiveIndex] = useState(null);

    const toggleAnswer = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    const faqData = [
        {
            question: "What is the purpose of this website?",
            answer: "With this website, it is hoped that it can introduce tourism in Mojokerto, especially Trowulan cultural tourism. In addition, it is also hoped that it can add cultural insight so that it is not forgotten."
        },
        {
            question: "What tourist attractions are on this website?",
            answer: "Tourist attractions include Wringin Lawang Temple, Tikus Temple, Bajang Ratu Temple, Trowulan Museum, Brahu Temple, and Maha Vihara Majapahit."
        },
        {
            question: "What features are there to introduce tourism on this website?",
            answer: "Features include a tourist attraction gallery, detailed descriptions, and a tour package booking system."
        },
        {
            question: "Is it possible to make a reservation for a tour here?",
            answer: "Yes, you can make reservations for tours through our Tours Package section."
        }
    ];

    return (
        <section className="faq-section">
            <h1 className="faq-title">FAQ</h1>
            <div className="faq-container">
                {faqData.map((faq, index) => (
                    <div key={index} className="faq-item">
                        <button
                            className="faq-question"
                            onClick={() => toggleAnswer(index)}
                        >
                            {faq.question}
                            <span className="faq-icon">
                                {activeIndex === index ? "▲" : "▼"}
                            </span>
                        </button>
                        {activeIndex === index && (
                            <div className="faq-answer">{faq.answer}</div>
                        )}
                    </div>
                ))}
            </div>
        </section>
    );
};

export default FAQ;
