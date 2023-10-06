import React, { useState, useEffect } from "react";
import "./Carrousel.css";
import carousel0 from "../assets/carousel0.png";
import carousel1 from "../assets/carousel1.png";
import carousel2 from "../assets/carousel2.png";
import carousel3 from "../assets/carousel3.png";
import carousel4 from "../assets/carousel4.png";
import carousel5 from "../assets/carousel5.png";

const images = [
  carousel0,
  carousel1,
  carousel2,
  carousel3,
  carousel4,
  carousel5,
];

const altImages = [
  "Seguro de auto",
  "Seguro de transporte",
  "Seguros de vida",
  "Seguros de moto",
  "Seguros de bicicletas",
  "Resposavilidad Civil",
  "Seguros de Comercio",
  "Seguro de accidentes Personales",
  "Caución",
];

const interval = 7000;

const Carousel = () => {
  const [index, setIndex] = useState(0);
  const [timer, setTimer] = useState(null);
  const [startX, setStartX] = useState(null);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, interval);

    return () => clearInterval(intervalId);
  }, []);

  const handlePrevClick = () => {
    clearInterval(timer);
    setIndex((index + images.length - 1) % images.length);
    setTimer(
      setInterval(() => {
        setIndex((index + 1) % images.length);
      }, interval)
    );
  };

  const handleNextClick = () => {
    clearInterval(timer);
    setIndex((index + 1) % images.length);
    setTimer(
      setInterval(() => {
        setIndex((index + 1) % images.length);
      }, interval)
    );
  };

  const handleTouchStart = (e) => {
    const startX = e.touches[0].clientX;
    setStartX(startX);
    clearInterval(timer);
  };

  const handleTouchMove = (e) => {
    if (!startX) return;
    const endX = e.touches[0].clientX;
    const diffX = endX - startX;
    if (Math.abs(diffX) > 50) {
      setStartX(null);
      if (diffX > 0) {
        handlePrevClick();
      } else {
        handleNextClick();
      }
    }
  };

  const handleTouchEnd = () => {
    setStartX(null);
    setTimer(
      setInterval(() => {
        setIndex((index + 1) % images.length);
      }, interval)
    );
  };

  return (
    <div
      className="carrousel"
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      <button onClick={handlePrevClick} className="prev_img">
        <img
          src={images[(index + images.length - 1) % images.length]}
          alt="prev"
        />
      </button>
      <div className="carrousel_img">
        <img src={images[index]} alt={altImages[index]} className="slide_img" />
      </div>
      <button onClick={handleNextClick} className="next_img">
        <img src={images[(index + 1) % images.length]} alt="next" />
      </button>
    </div>
  );
};

export default Carousel;
