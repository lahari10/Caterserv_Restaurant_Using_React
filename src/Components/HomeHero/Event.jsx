import React from 'react';
import '../../Styles/Event.css'; // Ensure to create and import the CSS file

const Event = ({ title, description, image }) => {
    return (
        <div className="event">
            <img src={image} alt={title} className="event-image" />
            <div className="event-info">
                <h3>{title}</h3>
                <p>{description}</p>
            </div>
        </div>
    );
};

export default Event;
