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
        <div className="registration-form">
            <h2>Register Now</h2>
            <form>
                <div className="form-group">
                <label>First Name</label>
                <input type="text" placeholder="Enter your first name" required />
                <div className="error">First name is required</div>
                </div>
                <div className="form-group">
                <label>Last Name</label>
                <input type="text" placeholder="Enter your last name" required />
                <div className="error">Last name is required</div>
                </div>
                <div className="form-group">
                <label>Street</label>
                <input type="text" placeholder="Enter your street address" required />
                <div className="error">Street is required</div>
                </div>
                <div className="form-group">
                <label>City</label>
                <input type="text" placeholder="Enter your city" required />
                <div className="error">City is required</div>
                </div>
                <div className="form-group">
                <label>State</label>
                <input type="text" placeholder="Enter your state" required />
                <div className="error">State is required</div>
                </div>
                <div className="form-group">
                <label>Postal Code</label>
                <input type="text" placeholder="Enter your postal code" required />
                <div className="error">Postal code is required</div>
                </div>
                <div className="form-group">
                <label>Phone</label>
                <input type="tel" placeholder="Enter your phone number" required />
                <div className="error">Phone is required</div>
                </div>
                <div className="form-group">
                <label>Email</label>
                <input type="email" placeholder="Enter your email" required />
                <div className="error">Email is required</div>
                </div>
                <div className="form-group">
                <label>Select Package</label>
                <select required>
                    <option value="">Select a package</option>
                    <option value="one-person">One Person Package</option>
                    <option value="minibus">Minibus Package</option>
                    <option value="bus">Bus Package</option>
                </select>
                <div className="error">Package is required</div>
                </div>
                <div className="form-group">
                <label>Adults</label>
                <input type="number" placeholder="Enter number of adults" required />
                <div className="error">Number of adults is required</div>
                </div>
                <div className="form-group">
                <label>Children</label>
                <input type="number" placeholder="Enter number of children" />
                </div>
                <div className="form-group">
                <label>Date</label>
                <input type="date" required />
                <div className="error">Date is required</div>
                </div>
                <div className="form-group">
                <label>Payment Type</label>
                <div className="radio-group">
                    <label>
                    <input type="radio" name="payment" value="paypal" required /> PayPal
                    </label>
                    <label>
                    <input type="radio" name="payment" value="mbanking" required /> M-Banking
                    </label>
                </div>
                <div className="error">Payment type is required</div>
                </div>
                <div className="form-group">
                <label>Message</label>
                <textarea placeholder="Leave a message (optional)"></textarea>
                </div>
                <button type="submit">Submit</button>
            </form>
        </div>
    );
};

export default RegistrationForm;
