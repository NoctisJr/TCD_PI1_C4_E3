import React, { useRef } from 'react';
import './CategoryCarousel.css'; // Agrega un archivo CSS específico para los estilos del carrusel

const CategoryCarousel = () => {
  const carouselRef = useRef(null);

  const scrollLeft = () => {
    carouselRef.current.scrollBy({ left: -200, behavior: 'smooth' });
  };

  const scrollRight = () => {
    carouselRef.current.scrollBy({ left: 200, behavior: 'smooth' });
  };

  return (
    <section className="categories-section">
      <h2 className='title_cat'>CATEGORIAS</h2>
      <div className="carousel-container">
        <button className="carousel-button left" onClick={scrollLeft}>
          &#8249;
        </button>
        <ul className="categories-list" ref={carouselRef}>
          <li className='escalada'>Escalada</li>
          <li>Senderismo</li>
          <li className='camping'>Camping</li>
          <li>Camping</li>
          <li>Exploración</li>
          <li>Montañismo</li>
        </ul>
        <button className="carousel-button right" onClick={scrollRight}>
          &#8250;
        </button>
      </div>
    </section>
  );
};

export default CategoryCarousel;