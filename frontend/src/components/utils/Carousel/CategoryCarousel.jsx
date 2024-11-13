import React, { useRef } from 'react';
import './CategoryCarousel.css'; // Agrega un archivo CSS específico para los estilos del carrusel
import imagen from "../../../assets/Img/mojarra1.jpg"

const CategoryCarousel = () => {
  const carouselRef = useRef(null);

  const scrollLeft = () => {
    carouselRef.current.scrollBy({ left: -100, behavior: 'smooth' });
  };

  const scrollRight = () => {
    carouselRef.current.scrollBy({ left: 100, behavior: 'smooth' });
  };

  return (
    <section className="categories-section">
      <h2 className='title_cat'>CATEGORIAS</h2>
      <div className="carousel-container">
        <button className="carousel-button left" onClick={scrollLeft}>
          &#8249;
        </button>
        <ul className="categories-list" ref={carouselRef}>
          
          <li className="category-item" style={{ backgroundImage: `url(${imagen})` }}>Escalada</li>
          <li className="category-item" style={{ backgroundImage: `url(${imagen})` }}>Senderismo</li>
          <li className="category-item" style={{ backgroundImage: `url(${imagen})` }}>Camping</li>
          <li className="category-item" style={{ backgroundImage: `url(${imagen})` }}>Camping</li>
          <li className="category-item" style={{ backgroundImage: `url(${imagen})` }}>Exploración</li>
          <li className="category-item" style={{ backgroundImage: `url(${imagen})` }}>Montañismo</li>
        </ul>
        <button className="carousel-button right" onClick={scrollRight}>
          &#8250;
        </button>
      </div>
    </section>
  );
};

export default CategoryCarousel;