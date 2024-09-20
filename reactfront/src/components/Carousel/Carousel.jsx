import React from 'react';
import Slider from 'react-slick';
import styles from './Carousel.module.css'; // Asegúrate de crear este archivo

const carouselImages = [
  '/puertas/puerta1.jpg',
  '/puertas/puertas2.jpg',
  '/puertas/puertas3.jpg'
];

function Carousel() {
  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 1500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,          // Activa el autoplay
    autoplaySpeed: 4000,     // Tiempo entre transiciones (3 segundos)
  };

  return (
    <div className={styles.carouselContainer}>
      <Slider {...settings}>
        {carouselImages.map((img, index) => (
          <div key={index} className={styles.slide}>
            <img src={img} alt={`Slide ${index + 1}`} />
          </div>
        ))}
      </Slider>
      <div className={styles.slogan}>
        <h2>Blocklemon Puertas</h2>
      </div>
    </div>
  );
}

export default Carousel;
