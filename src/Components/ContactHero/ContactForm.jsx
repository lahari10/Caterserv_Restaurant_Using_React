import React, { useState } from 'react';
import '../../Styles/ContactForm.css';

const ContactForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });

    const [messageSent, setMessageSent] = useState(false); // State to handle popup message

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Store data in local storage
        localStorage.setItem('formData', JSON.stringify(formData));
        // Log the data to the console for verification
        console.log(formData);
        // Show message
        setMessageSent(true);
        // Clear form fields
        setFormData({ name: '', email: '', subject: '', message: '' });

        // Hide popup message after 3 seconds
        setTimeout(() => {
            setMessageSent(false);
        }, 1000);
    };

    return (
        <div>
            {messageSent && <div className="popup-message">Message Sent!</div>}
            <form className="contact-form" onSubmit={handleSubmit}>
                <input type="text" name="name" placeholder="Your Name" value={formData.name} onChange={handleChange} required />
                <input type="email" name="email" placeholder="Your Email" value={formData.email} onChange={handleChange} required />
                <input type="text" name="subject" placeholder="Subject" value={formData.subject} onChange={handleChange} required />
                <textarea name="message" placeholder="Your Message" value={formData.message} onChange={handleChange} required />
                <button type="submit" className="submit-btn">Send Message</button>
            </form>
        </div>
    );
};

export default ContactForm;
