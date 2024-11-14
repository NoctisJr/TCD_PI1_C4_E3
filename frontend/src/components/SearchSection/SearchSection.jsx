import BtnPrimary from '../Buttons/BtnPrimary/BtnPrimary';
import './searchSection.css';

const SearchSection = () => {
    return (
        <div className="search-section">
            <input type="text" placeholder="Que Aventura Buscas ?" className="search-input" />
            <BtnPrimary children = "Buscar"/>
        </div>
    );
    };

export default SearchSection;