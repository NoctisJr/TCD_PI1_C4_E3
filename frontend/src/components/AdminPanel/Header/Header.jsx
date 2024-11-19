import React, { useRef } from 'react';
import './Header.css';

// eslint-disable-next-line react/prop-types
const Header = ({ title, onSearch }) => {
  const searchTimeoutRef = useRef(null); // For managing debounce timeout

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

  return (
    <div className="header">
      <h1>{title}</h1>
      <input
        type="text"
        placeholder="Search by name, unit, status..."
        onChange={handleSearchChange}
        className="search-bar"
      />
    </div>
  );
};

export default Header;
