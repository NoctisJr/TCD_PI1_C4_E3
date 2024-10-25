import React from 'react';
import './App.css'; // Importa el archivo de estilos CSS

const App = () => {
  return (
    <div className="app-body">
      {/* Sección del buscador */}
      <header className="search-section">
        <h1>Buscador</h1>
        <input type="text" placeholder="Buscar productos..." />
      </header>

      {/* Sección de categorías */}
      <section className="categories-section">
        <h2>Categorías</h2>
        <ul>
          <li>Categoría 1</li>
          <li>Categoría 2</li>
          <li>Categoría 3</li>
        </ul>
      </section>

      {/* Sección de recomendaciones */}
      <section className="recommendations-section">
        <h2>Recomendaciones</h2>
        <div className="recommendation-item">Producto recomendado 1</div>
        <div className="recommendation-item">Producto recomendado 2</div>
      </section>
    </div>
  );
};

export default App;