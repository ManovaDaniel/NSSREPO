import React, { useEffect, useState } from "react";
import "./NSSCarousel.css";

const images = [
  { src: "https://via.placeholder.com/600x400?text=Image+1", text: "Text 1" },
  { src: "https://via.placeholder.com/600x400?text=Image+2", text: "Text 2" },
  { src: "https://via.placeholder.com/600x400?text=Image+3", text: "Text 3" },
  { src: "https://via.placeholder.com/600x400?text=Image+4", text: "Text 4" },
  { src: "https://via.placeholder.com/600x400?text=Image+5", text: "Text 5" },
  { src: "https://via.placeholder.com/600x400?text=Image+6", text: "Text 6" },
  { src: "https://via.placeholder.com/600x400?text=Image+7", text: "Text 7" },
  { src: "https://via.placeholder.com/600x400?text=Image+8", text: "Text 8" },
  { src: "https://via.placeholder.com/600x400?text=Image+9", text: "Text 9" },
  { src: "https://via.placeholder.com/600x400?text=Image+10", text: "Text 10" },
];

const NSSCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoScrolling, setIsAutoScrolling] = useState(true);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  useEffect(() => {
    if (!isAutoScrolling) return;
    const interval = setInterval(nextSlide, 3000);
    return () => clearInterval(interval);
  }, [currentIndex, isAutoScrolling]);

  // Function to handle manual button clicks
  const handlePrevClick = () => {
    setIsAutoScrolling(false);
    prevSlide();
  };

  const handleNextClick = () => {
    setIsAutoScrolling(false);
    nextSlide();
  };

  return (
    <div className="carousel-container">
      <button className="carousel-button left" onClick={handlePrevClick}>
        &#10094;
      </button>
      <div className="carousel">
        {images.map((image, index) => {
          let position = "nextSlide";
          if (index === currentIndex) position = "activeSlide";
          else if (index === (currentIndex - 1 + images.length) % images.length)
            position = "prevSlide";

          return (
            <div key={index} className={`slide ${position}`}>
              <img src={image.src} alt={`Slide ${index + 1}`} />
              <div className="text-overlay">{image.text}</div>
            </div>
          );
        })}
      </div>
      <button className="carousel-button right" onClick={handleNextClick}>
        &#10095;
      </button>
    </div>
  );
};

export default NSSCarousel;
