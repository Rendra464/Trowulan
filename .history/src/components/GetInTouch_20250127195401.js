import React, { useState } from 'react';
import "../styles/GetInTouch.css";
import axios from "axios";

const GetInTouch = () => {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!formData.name || !formData.email || !formData.phone) {
            alert("Please fill in all fields.");
            return;
        }

        setIsSubmitting(true);
        
        try {
            const response = await axios.post('https://localhost:7126/api/getintouch', formData);
    
            console.log("Response:", response.data);
            alert('Thank you for getting in touch! We will contact you shortly.');
    
            setFormData({ name: '', email: '', phone: '' });
    
        } catch (error) {
            
            console.error("Error submitting form:", error);
            alert('An error occurred while submitting the form.');
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="get-in-touch">
            <h1 className="title">Get in Touch</h1>
            <p className="subtitle">
                One of our team will be in contact with you shortly.
            </p>
            <form className="contact-form" onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="name"
                    placeholder="Name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                />
                <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                />
                <input
                    type="tel"
                    name="phone"
                    placeholder="Phone"
                    value={formData.phone}
                    onChange={handleChange}
                    onKeyPress={(e) => {
                        if (!/[0-9]/.test(e.key)) {
                        e.preventDefault();
                        }
                    }}
                    required
                />
                <button type="submit" className="submit-button">
                    Submit
                </button>
            </form>
        </div>
    );
};

export default GetInTouch;
