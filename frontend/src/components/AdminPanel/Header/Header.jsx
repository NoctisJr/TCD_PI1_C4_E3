import React, { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import './Header.css';

// eslint-disable-next-line react/prop-types
const Header = ({ title, onSearch, selectedSection }) => {
  const searchTimeoutRef = useRef(null); // For managing debounce timeout
  const navigate = useNavigate();
  const handleSearchChange = (event) => {
    const value = event.target.value;

    // Clear any existing timeout
    if (searchTimeoutRef.current) {
      clearTimeout(searchTimeoutRef.current);
    }

    searchTimeoutRef.current = setTimeout(() => {
      onSearch(value); // Trigger the search callback after the delay
    }, 500); // Delay in milliseconds
  };

  const handleAddClick = () => {
    if (selectedSection === 'categories') {
      navigate('/admin/add-category');
    } else if (selectedSection === 'tours') {
      navigate('/admin/add-tour');
    }
  };

  return (
    <div className="header">
      <h1>{title}</h1>
      <div className="right-container">

        {['categories', 'tours'].includes(selectedSection) && (
          <button className="add-btn" onClick={handleAddClick}>
            Agregar {title}
          </button>
        )}

        <input
          type="text"
          placeholder="Search by name, unit, status..."
          onChange={handleSearchChange}
          className="search-bar"
        />
      </div>
    </div>
  );
};

export default Header;
