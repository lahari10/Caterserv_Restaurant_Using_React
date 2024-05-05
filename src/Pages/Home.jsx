import React from 'react';
import Hero from '../Components/HomeHero/Hero';  
import AboutSection from '../Components/HomeHero/AboutSection';
import MenuSection from '../Components/HomeHero/MenuSection';
import LatestEventsSection from '../Components/HomeHero/LatestEventSection';
import TestimonialsSection from '../Components/HomeHero/TestimonialsSection';
import { useNavigate } from 'react-router-dom';

const Home = () => {
    const navigate = useNavigate();

    const handleKnowMoreClick = () => {
        navigate('/about');
    }

    return (
        <div style={{ marginTop: '70px' }}>
        <main>
            <Hero onKnowMoreClick={handleKnowMoreClick} />
            <AboutSection onKnowMoreClick={handleKnowMoreClick} />
            <MenuSection />
            <LatestEventsSection />
            <TestimonialsSection />
        </main>
        </div>
    );
}

export default Home;
