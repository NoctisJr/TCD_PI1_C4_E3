import React from 'react';
import Card from './Card';
import '../utils/recommendationSection.css'
import imagen1 from '../../assets/Img/imagen1.jpg';
import imagen2 from '../../assets/Img/imagen1.jpg';
import imagen3 from '../../assets/Img/imagen1.jpg';

const recommendations = [
    {
      image: imagen1,
      title: "Tour de Escalada Básica",
      description: "Mejora la condición física: La escalada es un deporte completo que ayuda a mejorar la resistencia, la fuerza, el equilibrio, la flexibilidad y la agilidad. También ayuda a tonificar los músculos y a mejorar el control del cuerpo.",
    },
    {
      image: imagen2, 
      title: "Ruta de Senderismo Familiar",
      description: "Disfruta de una caminata relajante en compañía de tus seres queridos mientras conectas con la naturaleza y exploras nuevos paisajes.",
    },
    {
      image: imagen3, 
      title: "Experiencia Extrema de Escalada",
      description: "Un desafío para aquellos que buscan llevar su entrenamiento y habilidades al siguiente nivel, explorando terrenos difíciles.",
    }
  ];
  const RecommendationsSection = () => {
    return (
      <section className="recommendations-section">
        <h2 className="recommendations-title">RECOMENDACIONES</h2>
        <div className="recommendations-list">
          {recommendations.map((rec, index) => (
            <Card
              key={index}
              image={rec.image}
              title={rec.title}
              description={rec.description}
            />
          ))}
        </div>
      </section>
    );
  };

export default RecommendationsSection;