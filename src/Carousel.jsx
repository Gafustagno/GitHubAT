import React, { useState } from "react";
import "./Carousel.css";

const Carousel = ({ children }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrevClick = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? children.length - 1 : prevIndex - 1
    );
  };

  const handleNextClick = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === children.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="carousel-container">
      <button className="carousel-button prev" onClick={handlePrevClick}>
        &#8249;
      </button>

      <div className="carousel-content">{children[currentIndex]}</div>

      <button className="carousel-button next" onClick={handleNextClick}>
        &#8250;
      </button>
    </div>
  );
};

export default Carousel;
