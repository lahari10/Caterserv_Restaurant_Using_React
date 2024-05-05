import React from 'react';
import '../../Styles/Hero.css';

const Hero = () => {
    return (
        <div className="hero-section">
            <div className="text-container">
                <h1 className='welcome_message'>About</h1>
                <p className="subheading">Trusted by many customers!</p>
                <div className="buttons-container">
                    <button className="btn btn-primary">Order Now</button>
                    
                </div>
            </div>
        </div>
    );
}

export default Hero;
