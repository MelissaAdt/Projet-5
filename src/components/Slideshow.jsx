import React, { useState } from 'react';
import PropTypes from 'prop-types';
import '../styles/Slideshow.scss';

const Slideshow = ({ images }) => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const nextImage = () => {
        setCurrentImageIndex((prevIndex) =>
            prevIndex === images.length - 1 ? 0 : prevIndex + 1
        );
    };

    const prevImage = () => {
        setCurrentImageIndex((prevIndex) =>
            prevIndex === 0 ? images.length - 1 : prevIndex - 1
        );
    };

    return (
        <div className="slideshow">
            {images.length > 1 && ( 
                <>
                    <div className="arrow left" onClick={prevImage}></div>
                    <div className="arrow right" onClick={nextImage}></div>
                </>
            )}
            <div className="image-container">
                <img
                    src={images[currentImageIndex]}
                    alt={`Slide ${currentImageIndex + 1}`}
                    className="slideshow-image"
                />
                {images.length > 1 && ( 
                    <div className="slide-number">{currentImageIndex + 1}/{images.length}</div>
                )}
            </div>
        </div>
    );
};

Slideshow.propTypes = {
    images: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Slideshow;
