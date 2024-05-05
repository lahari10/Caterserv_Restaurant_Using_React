import React from 'react';
import '../../Styles/AboutSection.css'; 
import swagatimage from '../../Assets/swagatimage.jpg';


const AboutSection = ({onKnowMoreClick}) => {
    return (
        <div className="about-section">
            <div className="container">
                <div className='btn-container'>
                <button className="btn btn-primary">About Caterserv</button>
                </div>
                <div className='text-container'>
                <p>
                    CaterServ has been providing exceptional catering services for over a decade.
                    We specialize in creating memorable experiences with our exquisite menus and impeccable service.
                </p>
                <p>
                    Our dedicated team is passionate about food and customer satisfaction.
                    We strive to bring your event vision to life with attention to detail and a personalized touch.
                </p>
                <button className="btn btn-secondary" onClick={onKnowMoreClick}>Learn More</button>
                </div>
            </div>
            <div>
            <img src={swagatimage} alt="Swagat India House" className="about-image" />
            </div>
        </div>
    );
}

export default AboutSection;
