import React from 'react';
import '../../Styles/Hero.css';
import { useNavigate } from 'react-router-dom';

const Hero = ({onKnowMoreClick}) => {

    const navigate = useNavigate();

    const handleBookNowClick = () => {
        navigate('/events'); // Redirects to the events page
    }  
/*
    const handleKnowMoreClick = () => {
        navigate('/about');
    }
*/
    return (
        <div className="hero-section">
            <div className="text-container">
                <h1 className='welcome_message'>Welcome to Caterserv</h1>
                <p className="subheading">Explore our world-class services and discover what makes us unique.</p>
                <div className="buttons-container">
                    <button className="btn btn-primary" onClick={handleBookNowClick}>Book Now</button>
                    <button className="btn btn-secondary" onClick={onKnowMoreClick}>Know More</button>
                </div>
            </div>
        </div>
    );
}

export default Hero;
