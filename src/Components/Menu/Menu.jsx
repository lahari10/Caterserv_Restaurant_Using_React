import React from 'react';
import '../../Styles/Menu.css'; // Ensure to create and import the CSS file


const Service = ({ icon, title, description }) => {
    return (
        <div className="service">
            <img src={icon} alt='service icon' className="service-icon" />
            <h3 className="service-title">{title}</h3>
            <p className="service-description">{description}</p>
            <button className="btn btn-primary">Add to Cart</button>
        </div>
    );
};

export default Service;
