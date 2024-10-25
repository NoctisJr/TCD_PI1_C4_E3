import React from 'react';
import './App.css';  // Importamos el archivo de estilos
import logo from './assets/MOJARRA.png';  // Importamos la imagen del logo

const App = () => {
  return (
    <div className="app-body">
      
      {/* Sección del buscador */}
      <header className="search-section">
        <img src={logo} alt="Logo de La ramoja" className="logo" /> {/* Logo agregado */}
        <h1></h1>
        <input type="text" placeholder="Buscar tours, escaladas..." />
      </header>

      {/* Sección de categorías */}
      <section className="categories-section">
        <h2>Categorías</h2>
        <ul>
          <li>Escalada</li>
          <li>Senderismo</li>
          <li>Aventuras</li>
        </ul>
      </section>

      {/* Sección de recomendaciones */}
      <section className="recommendations-section">
        <h2>Recomendaciones</h2>
        <div className="recommendation-item">Tour de Escalada Básica</div>
        <div className="recommendation-item">Ruta de Senderismo Familiar</div>
        <div className="recommendation-item">Experiencia Extrema de Escalada</div>
      </section>
    </div>
  );
};

export default App;