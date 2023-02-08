import React, { useState , useEffect } from 'react';
import './Carrousel.css';
import carousel0 from '../assets/carousel0.jpeg';
import carousel1 from '../assets/carousel1.jpeg';
import carousel2 from '../assets/carousel2.jpeg';
import carousel3 from '../assets/carousel3.jpeg';
import carousel4 from '../assets/carousel4.jpeg';
import carousel5 from '../assets/carousel5.jpeg';
import carousel6 from '../assets/carousel6.jpeg';
import carousel7 from '../assets/carousel7.jpeg';
import carousel8 from '../assets/carousel8.jpeg';


const images = [
  carousel0,carousel1,carousel2,
  carousel3,carousel4,carousel5,
  carousel6,carousel7,carousel8
]

const altImages = [
  'Seguro de auto','Seguro de transporte','Seguros de vida',
  'Seguros de moto','Seguros de bicicletas','Resposavilidad Civil',
  'Seguros de Comercio','Seguro de accidentes Personales','Caución'
]

const interval = 6000;

const Carousel = () => {
  const [index, setIndex] = useState(0);
  const [timer, setTimer] = useState(null);

  useEffect(() => { 
    setTimer(setInterval(() => {
      setIndex((index + 1) % images.length);
    }, interval));
    return () => clearInterval(timer);
  }, [index, images.length]);


  const handlePrevClick = () => {
    clearInterval(timer);
    setIndex((index + images.length - 1) % images.length);
    setTimer(setInterval(() => {
      setIndex((index + 1) % images.length);
    }, interval));
  };

  const handleNextClick = () => {
    clearInterval(timer);
    setIndex((index + 1) % images.length);
    setTimer(setInterval(() => {
      setIndex((index + 1) % images.length);
    }, interval));
  };
      
    return (
    <div className='carrousel' >
      <button onClick={handlePrevClick} className='prev_img'> 
        <img src={images[(index + images.length - 1) % images.length]} alt="prev" />
      </button>
      <div className='carrousel_img'>
        <img src={images[index]} alt={altImages[index]} className='slide_img'/>
      </div>
      <button  onClick={handleNextClick} className= 'next_img' >
        <img src={images[(index + 1) % images.length]} alt="next" />
      </button>
    </div>
    );
};


export default Carousel;