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
        return newErrors;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const validationErrors = validate();
        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
        } else {
            setErrors({});
            alert("Form submitted successfully!");
        }
    };

    return (
        <div className="registration-form">
            <h2>Register Now</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label>First Name</label>
                    <input
                        type="text"
                        name="firstName"
                        placeholder="Enter your first name"
                        value={formData.firstName}
                        onChange={handleChange}
                    />
                    {errors.firstName && <div className="error">{errors.firstName}</div>}
                </div>
                <div className="form-group">
                    <label>Last Name</label>
                    <input
                        type="text"
                        name="lastName"
                        placeholder="Enter your last name"
                        value={formData.lastName}
                        onChange={handleChange}
                    />
                    {errors.lastName && <div className="error">{errors.lastName}</div>}
                </div>
                <div className="form-group">
                    <label>Street</label>
                    <input
                        type="text"
                        name="street"
                        placeholder="Enter your street address"
                        value={formData.street}
                        onChange={handleChange}
                    />
                    {errors.street && <div className="error">{errors.street}</div>}
                </div>
                <div className="form-group">
                    <label>City</label>
                    <input
                        type="text"
                        name="city"
                        placeholder="Enter your city"
                        value={formData.city}
                        onChange={handleChange}
                    />
                    {errors.city && <div className="error">{errors.city}</div>}
                </div>
                <div className="form-group">
                    <label>State</label>
                    <input
                        type="text"
                        name="state"
                        placeholder="Enter your state"
                        value={formData.state}
                        onChange={handleChange}
                    />
                    {errors.state && <div className="error">{errors.state}</div>}
                </div>
                <div className="form-group">
                    <label>Postal Code</label>
                    <input
                        type="text"
                        name="postalCode"
                        placeholder="Enter your postal code"
                        value={formData.postalCode}
                        onChange={handleChange}
                    />
                    {errors.postalCode && <div className="error">{errors.postalCode}</div>}
                </div>
                <div className="form-group">
                    <label>Phone</label>
                    <input
                        type="tel"
                        name="phone"
                        placeholder="Enter your phone number"
                        value={formData.phone}
                        onChange={handleChange}
                    />
                    {errors.phone && <div className="error">{errors.phone}</div>}
                </div>
                <div className="form-group">
                    <label>Email</label>
                    <input
                        type="email"
                        name="email"
                        placeholder="Enter your email"
                        value={formData.email}
                        onChange={handleChange}
                    />
                    {errors.email && <div className="error">{errors.email}</div>}
                </div>
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
                        <label>
                            <input
                                type="radio"
                                name="paymentType"
                                value="paypal"
                                checked={formData.paymentType === "paypal"}
                                onChange={handleChange}
                            />
                            PayPal
                        </label>
                        <label>
                            <input
                                type="radio"
                                name="paymentType"
                                value="mbanking"
                                checked={formData.paymentType === "mbanking"}
                                onChange={handleChange}
                            />
                            M-Banking
                        </label>
                    </div>
                    {errors.paymentType && <div className="error">{errors.paymentType}</div>}
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
                <button type="submit">Submit</button>
            </form>
        </div>
    );
};

export default RegistrationForm;
