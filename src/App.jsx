
// App.jsx
import React from 'react';
import './App.css';
import SearchSection from './SearchSection';
import CategoryCarousel from './CategoryCarousel';
import RecommendationsSection from './RecommendationsSection';

const App = () => {
  return (
    <div className="app-body">
      <SearchSection />
      <CategoryCarousel />
      <RecommendationsSection />
    </div>
  );
};

export default App;