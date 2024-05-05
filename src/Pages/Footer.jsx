// Footer.jsx
import React from 'react';
import '../Styles/Footer.css'; // Ensure to create and import the CSS file



const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-container">
                <div className="footer-about">
                    <h3>CaterServ</h3>
                    <p>CaterServ offers exclusive catering services for all occasions. Our dedicated team ensures every detail is perfect.</p>
                </div>
                <div className="footer-address">
                    <h3>Contact Us</h3>
                    <p>123 Catering St, Food City, XY 12345</p>
                    <p>+1 234 567 890</p>
                    <p>info@catering.com</p>
                </div>
                <div className="footer-links">
                    <h3>Quick Links</h3>
                    <ul>
                        <li><a href="/about">About Us</a></li>
                        <li><a href="/services">Services</a></li>
                        <li><a href="/contact">Contact</a></li>
                        <li><a href="/gallery">Gallery</a></li>
                    </ul>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
