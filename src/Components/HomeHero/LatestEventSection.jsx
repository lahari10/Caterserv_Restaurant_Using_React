// LatestEventsSection.jsx
import React, { useState } from 'react';
import Event from './Event';
import '../../Styles/LatestEventSection.css'; // Ensure to create and import the CSS file

const eventsData = [
    {
        id: 1,
        category: 'wedding',
        title: 'Elegant Wedding Reception',
        description: 'A beautiful and elegant setting for your special day.',
        
    },
    {
        id: 2,
        category: 'Corporate',
        title: 'Professional lunch meetings',
        description: 'A professional meeting with lunch',
        
    },
    {
        id: 3,
        category: 'Buffet',
        title: 'Multi-cuisine options',
        description: 'Enjoy the day with multi food options',
        
    },
];

const LatestEventsSection = () => {
    const [activeCategory, setActiveCategory] = useState('all');

    const categories = ['all', 'wedding', 'corporate', 'buffet'];

    const filteredEvents = eventsData.filter(event =>
        activeCategory === 'all' || event.category === activeCategory
    );

    return (
        <section className="latest-events">
            <div className="categories">
                {categories.map((category, index) => (
                    <button
                        key={index}
                        className={`category-btn ${activeCategory === category ? 'active' : ''}`}
                        onClick={() => setActiveCategory(category)}
                    >
                        {category.charAt(0).toUpperCase() + category.slice(1)}
                    </button>
                ))}
            </div>
            <div className="events-container">
                {filteredEvents.map((event) => (
                    <Event key={event.id} {...event} />
                ))}
            </div>
        </section>
    );
};

export default LatestEventsSection;
