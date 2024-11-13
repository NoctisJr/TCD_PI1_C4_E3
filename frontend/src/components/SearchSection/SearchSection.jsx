import React from 'react';
import './searchSection.css';

const SearchSection = () => {
    return (
        <header className="search-section">
            <input type="text" placeholder="Que Aventura Buscas ?" className="search-input" />
        </header>
    );
    };

export default SearchSection;