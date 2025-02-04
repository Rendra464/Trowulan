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
        }
    };

    return (
        
    );
};

export default RegistrationForm;
