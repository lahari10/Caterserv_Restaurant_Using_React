// TestimonialsSection.jsx
import React from 'react';
import Slider from 'react-slick';
import '../../Styles/TestimonialsSection.css'; // Make sure to create this CSS file

const testimonialsData = [
    {
        id: 1,
        name: "John Doe",
        comment: "Excellent service! Highly recommend.",
        location: "New York"
    },
    {
        id: 2,
        name: "Jane Smith",
        comment: "Wonderful experience, the food was fantastic!",
        location: "San Francisco"
    },
    // Add more testimonials as needed
];

const TestimonialsSection = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
    };

    return (
        <div className="testimonials-section">
            <Slider {...settings}>
                {testimonialsData.map(testimonial => (
                    <div key={testimonial.id} className="testimonial">
                        <p>{testimonial.comment}</p>
                        <h4>{testimonial.name}, {testimonial.location}</h4>
                    </div>
                ))}
            </Slider>
        </div>
    );
}

export default TestimonialsSection;
