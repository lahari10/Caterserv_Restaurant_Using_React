import React from 'react';
import Service from './Menu';
import '../../Styles/MenuSection.css'; 
import food2 from '../../Assets/food2.jpg'; 
import food3 from '../../Assets/food3.jpg';
import food4 from '../../Assets/food4.jpg';
import food5 from '../../Assets/food5.jpg';

const servicesData = [
    {
        icon: food2,
        title: 'Butter Chicken',
        description: 'Americans fav dish'
        
    },
    {
        icon: food3,
        title: 'Chicken Curry',
        description: 'Indians fav dish'
        
    },
    {
        icon: food4,
        title: 'Tandoori Chicken',
        description: 'The authentic dish'
        
    },
    {
        icon: food5,
        title: 'Thalapia fish',
        description: 'Omega 3 protein'
        
    },
    {
        icon: food2,
        title: 'Samosa',
        description: 'Veg appetizer'
        
    },
    {
        icon: food3,
        title: 'Cut Mirchi',
        description: 'Evening snack'
        
    },
    {
        icon: food4,
        title: 'Paneer Saag',
        description: 'Green Flavors'
        
    }
];

const ServicesSection = () => {
    return (
        <section className="services-section">
            <div className="services-container">
                {servicesData.map((service, index) => (
                    <Service key={index} {...service} />
                ))}
            </div>
        </section>
    );
};

export default ServicesSection;
