// ContactPage.jsx
import React from 'react';
import ContactForm from '../Components/ContactHero/ContactForm'; // Ensure the component is correctly imported
import '../Styles/ContactForm.css'; // Make sure to create and import the CSS file



const ContactPage = () => {
    return (
        <div className="contact-page" style={{ marginTop: '70px' }}>
            <div className="contact-form-section">
                <ContactForm />
            </div>
            <div className="contact-info-section" style={{ marginTop: '70px' }}>
                <h3>Contact Information</h3>
                <p><strong>Address:</strong> 123 Example St, City, Country</p>
                <p><strong>Phone:</strong> +123 456 7890</p>
                <p><strong>Email:</strong> info@example.com</p>
                <p><strong>Hours:</strong> Mon-Fri, 9:00AM - 5:00PM</p>
            </div>
        </div>
        
    );
};

export default ContactPage;
