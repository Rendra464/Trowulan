import React, { useState } from "react";
import "../styles/RegistrationForm.css";
import axios from "axios";

const RegistrationForm = () => {
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        street: "",
        city: "",
        state: "",
        postalCode: "",
        phone: "",
        email: "",
        package: "",
        adult: "",
        children: "",
        date: "",
        paymentType: "",
        message: "",
    });

    const [errors, setErrors] = useState({});
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };
    

    const validate = () => {
        const newErrors = {};
        Object.keys(formData).forEach((key) => {
            if (!formData[key] && key !== "children" && key !== "message") {
                newErrors[key] = "This field is required.";
            }
            
        });

        if (formData.email && !/^\S+@\S+\.\S+$/.test(formData.email)) {
            newErrors.email = "Enter a valid email address.";
        }
        if (formData.phone && !/^\d{10,15}$/.test(formData.phone)) {
            newErrors.phone = "Enter a valid phone number (10-15 digits).";
        }

        return newErrors;
    };
    
    const handleSubmit = async (e) => {
        e.preventDefault();
        const validationErrors = validate();
    
        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
            return;
        }
    
        try {
            setIsSubmitting(true);
    
            const response = await axios.post(
                "https://localhost:7126/api/registrations"
                formData,
                {
                    headers: {
                        "Content-Type": "application/json",
                    },
                }
            );
    
            alert("Form submitted successfully!");
            console.log("Response:", response.data);
    
            // Reset form
            setFormData({
                firstName: "",
                lastName: "",
                street: "",
                city: "",
                state: "",
                postalCode: "",
                phone: "",
                email: "",
                package: "",
                adult: "",
                children: "",
                date: "",
                paymentType: "",
                message: "",
            });
            setErrors({});
        } catch (error) {
            console.error("Error submitting form:", error);
    
            // Handle different types of errors
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
        <div className="registration-form">
            <h2>Register Now</h2>
            <form onSubmit={handleSubmit}>
                {[
                    { name: "firstName", label: "First Name", type: "text" },
                    { name: "lastName", label: "Last Name", type: "text" },
                    { name: "street", label: "Street", type: "text" },
                    { name: "city", label: "City", type: "text" },
                    { name: "state", label: "State", type: "text" },
                    { name: "postalCode", label: "Postal Code", type: "text" },
                    { name: "phone", label: "Phone", type: "tel" },
                    { name: "email", label: "Email", type: "email" },
                ].map(({ name, label, type }) => (
                    <div className="form-group" key={name}>
                        <label>{label}</label>
                        <input
                            type={type}
                            name={name}
                            placeholder={`Enter your ${label.toLowerCase()}`}
                            value={formData[name]}
                            onChange={handleChange}
                        />
                        {errors[name] && <div className="error">{errors[name]}</div>}
                    </div>
                ))}

                <div className="form-group">
                    <label>Select Package</label>
                    <select
                        name="package"
                        value={formData.package}
                        onChange={handleChange}
                    >
                        <option value="">Select a package</option>
                        <option value="one-person">One Person Package</option>
                        <option value="minibus">Minibus Package</option>
                        <option value="bus">Bus Package</option>
                    </select>
                    {errors.package && <div className="error">{errors.package}</div>}
                </div>

                <div className="form-group">
                    <label>Adults</label>
                    <input
                        type="number"
                        name="adult"
                        placeholder="Enter number of adults"
                        value={formData.adult}
                        onChange={handleChange}
                    />
                    {errors.adult && <div className="error">{errors.adult}</div>}
                </div>

                <div className="form-group">
                    <label>Children</label>
                    <input
                        type="number"
                        name="children"
                        placeholder="Enter number of children"
                        value={formData.children}
                        onChange={handleChange}
                    />
                </div>

                <div className="form-group">
                    <label>Date</label>
                    <input
                        type="date"
                        name="date"
                        value={formData.date}
                        onChange={handleChange}
                    />
                    {errors.date && <div className="error">{errors.date}</div>}
                </div>

                <div className="form-group">
                    <label>Payment Type</label>
                    <div className="radio-group">
                        {["paypal", "mbanking"].map((type) => (
                            <label key={type}>
                                <input
                                    type="radio"
                                    name="paymentType"
                                    value={type}
                                    checked={formData.paymentType === type}
                                    onChange={handleChange}
                                />
                                {type.charAt(0).toUpperCase() + type.slice(1)}
                            </label>
                        ))}
                    </div>
                    {errors.paymentType && (
                        <div className="error">{errors.paymentType}</div>
                    )}
                </div>

                <div className="form-group">
                    <label>Message</label>
                    <textarea
                        name="message"
                        placeholder="Leave a message (optional)"
                        value={formData.message}
                        onChange={handleChange}
                    ></textarea>
                </div>

                <button type="submit" disabled={isSubmitting}>
                    {isSubmitting ? "Submitting..." : "Submit"}
                </button>
            </form>
        </div>
    );
};

export default RegistrationForm;
