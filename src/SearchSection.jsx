import React from 'react';
import logo from './assets/MOJARRA.png';  // Importamos la imagen del logo
const SearchSection = () => {
    return (
        <header className="search-section">
            <input type="text" placeholder="Que Aventura Buscas ?" className="search-input" />
        </header>
    );
    };

export default SearchSection;