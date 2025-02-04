import React, { useState } from "react";
import "./RegistrationForm.css";

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
        // Handle form submission logic here.
        }
    };

    return (
        <div className="registration-form">
        <h2>Registration Form</h2>
        <form onSubmit={handleSubmit}>
            <div className="form-group">
            <label>First Name</label>
            <input
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
            />
            {errors.firstName && <p className="error">{errors.firstName}</p>}
            </div>

            <div className="form-group">
            <label>Last Name</label>
            <input
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
            />
            {errors.lastName && <p className="error">{errors.lastName}</p>}
            </div>

            <div className="form-group">
            <label>Street</label>
            <input
                type="text"
                name="street"
                value={formData.street}
                onChange={handleChange}
            />
            {errors.street && <p className="error">{errors.street}</p>}
            </div>

            <div className="form-group">
            <label>City</label>
            <input
                type="text"
                name="city"
                value={formData.city}
                onChange={handleChange}
            />
            {errors.city && <p className="error">{errors.city}</p>}
            </div>

            <div className="form-group">
            <label>State</label>
            <input
                type="text"
                name="state"
                value={formData.state}
                onChange={handleChange}
            />
            {errors.state && <p className="error">{errors.state}</p>}
            </div>

            <div className="form-group">
            <label>Postal Code</label>
            <input
                type="text"
                name="postalCode"
                value={formData.postalCode}
                onChange={handleChange}
            />
            {errors.postalCode && <p className="error">{errors.postalCode}</p>}
            </div>

            <div className="form-group">
            <label>Phone</label>
            <input
                type="text"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
            />
            {errors.phone && <p className="error">{errors.phone}</p>}
            </div>

            <div className="form-group">
            <label>Email</label>
            <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
            />
            {errors.email && <p className="error">{errors.email}</p>}
            </div>

            <div className="form-group">
            <label>Select Package</label>
            <select
                name="package"
                value={formData.package}
                onChange={handleChange}
            >
                <option value="">-- Select a Package --</option>
                <option value="basic">Basic</option>
                <option value="premium">Premium</option>
                <option value="vip">VIP</option>
            </select>
            {errors.package && <p className="error">{errors.package}</p>}
            </div>

            <div className="form-group">
            <label>Adult</label>
            <input
                type="number"
                name="adult"
                value={formData.adult}
                onChange={handleChange}
            />
            {errors.adult && <p className="error">{errors.adult}</p>}
            </div>

            <div className="form-group">
            <label>Children</label>
            <input
                type="number"
                name="children"
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
            {errors.date && <p className="error">{errors.date}</p>}
            </div>

            <div className="form-group">
            <label>Payment Type</label>
            <div className="radio-group">
                <label>
                <input
                    type="radio"
                    name="paymentType"
                    value="Paypal"
                    onChange={handleChange}
                />
                Paypal
                </label>
                <label>
                <input
                    type="radio"
                    name="paymentType"
                    value="Mbanking"
                    onChange={handleChange}
                />
                Mbanking
                </label>
            </div>
            {errors.paymentType && <p className="error">{errors.paymentType}</p>}
            </div>

            <div className="form-group">
            <label>Message</label>
            <textarea
                name="message"
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
