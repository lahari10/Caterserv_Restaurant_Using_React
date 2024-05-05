// BookNowForm.jsx
import React, { useState } from 'react';
import '../../Styles/BookNowForm.css'; // Make sure to create and import the CSS file

const BookNowForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        eventType: '',
        date: '',
        message: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Here you would typically handle the form submission, e.g., send data to a server
        console.log(formData); // For demonstration, we're just logging to the console
    };

    return (
        <form className="book-now-form" onSubmit={handleSubmit}>
            <input type="text" name="name" placeholder="Your Name" value={formData.name} onChange={handleChange} required />
            <input type="email" name="email" placeholder="Your Email" value={formData.email} onChange={handleChange} required />
            <select name="eventType" value={formData.eventType} onChange={handleChange} required>
                <option value="">Select Event Type</option>
                <option value="wedding">Wedding</option>
                <option value="corporate">Corporate Event</option>
                <option value="birthday">Birthday Party</option>
                <option value="other">Other</option>
            </select>
            <input type="date" name="date" value={formData.date} onChange={handleChange} required />
            <textarea name="message" placeholder="Additional Message (Optional)" value={formData.message} onChange={handleChange} />
            <button type="submit" className="btn btn-primary">Book Now</button>
        </form>
    );
};

export default BookNowForm;
