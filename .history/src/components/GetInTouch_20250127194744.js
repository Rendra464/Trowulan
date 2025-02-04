import React, { useState } from 'react';
import "../styles/GetInTouch.css";

const GetInTouch = () => {
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

    const handleSubmit = (e) => {
        e.preventDefault();
        try {
            setIsSubmitting(true);
    
            const response = await axios.post(
                "https://localhost:7126/api/registrations",
                formData,
                {
                    headers: {
                        "Content-Type": "application/json",
                    },
                }
            );
    
            alert("Form submitted successfully!");
            console.log("Response:", response.data);
    
            setFormData({ name: '', email: '', phone: '' });
        } catch (error) {
            console.error("Error submitting form:", error);
    
            if (error.response) {
                console.log("Server responded with:", error.response.status);
                alert(`Error: ${error.response.data.message || "An error occurred while submitting the form."}`);
            } else if (error.request) {
                console.log("No response received:", error.request);
                alert("No response from server. Check if the backend is running.");
            } else {
                console.log("Axios error:", error.message);
                alert("Request setup error. Check your network connection.");
            }
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
