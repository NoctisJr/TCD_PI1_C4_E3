import React from 'react';
import logo from '../../assets/MOJARRA.png';  // Importamos la imagen del logo
const SearchSection = () => {
    return (
        <header className="search-section">
            <img src={logo} alt="Logo" className="logo" />
            <input type="text" placeholder="Que Aventura Buscas ?" className="search-input" />
        </header>
    );
    };

export default SearchSection;