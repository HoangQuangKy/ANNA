import React, { useState } from 'react';
import './Carousel.css';
const item = {

}
const Carousel = ({ items }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex === items.length - 1 ? 0 : prevIndex + 1));
    };

    const prevSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex === 0 ? items.length - 1 : prevIndex - 1));
    };

    return (
        <div className="carousel">
            <div className="slides" style={{ transform: `translateX(${-currentIndex * 100}%)` }}>
                {items.map((item, index) => (
                    <div key={index} className="slide">
                        <img src={item} alt={`slide-${index}`} />
                    </div>
                ))}
            </div>
            <button className="prev" onClick={prevSlide}>
                &lt;
            </button>
            <button className="next" onClick={nextSlide}>
                &gt;
            </button>
        </div>
    );
};

export default Carousel;