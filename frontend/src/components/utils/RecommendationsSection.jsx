import React from 'react';
import Card from './Card';
import imagen1 from '../../assets/imagen1.jpg';
import './Card.css';
import Form from "../../views/Register/Form";

const recommendations = [
    {
      image: imagen1,
      title: "Tour de Escalada Básica",
      description: "Mejora la condición física: La escalada es un deporte completo que ayuda a mejorar la resistencia, la fuerza, el equilibrio, la flexibilidad y la agilidad. También ayuda a tonificar los músculos y a mejorar el control del cuerpo.",
    },
    {
      image: imagen1, 
      title: "Ruta de Senderismo Familiar",
      description: "Disfruta de una caminata relajante en compañía de tus seres queridos mientras conectas con la naturaleza y exploras nuevos paisajes.",
    },
    {
      image: imagen1, 
      title: "Experiencia Extrema de Escalada",
      description: "Un desafío para aquellos que buscan llevar su entrenamiento y habilidades al siguiente nivel, explorando terrenos difíciles.",
    }
  ];

const RecommendationsSection = () => {
  return (
    <section className="recommendations-section">
      <h2 className="recommendations-title">RECOMENDACIONES</h2>
      <div className="cards-container">
        {recommendations.map((rec, index) => (
          <Card
            key={index}
            image={rec.image}
            title={rec.title}
            description={rec.description}
          />
        ))}
      </div>
      <>
      < Form/>
    </>
    </section>
  );
};

export default RecommendationsSection;
