
// App.jsx
import React from 'react';
import './App.css';
import SearchSection from './components/utils/SearchSection'
import CategoryCarousel from './components/utils/Carousel/CategoryCarousel';
import RecommendationsSection from './components/utils/RecommendationsSection';
import TourDetail from './components/TourDetail';
import Footer from './components/Footer';
import Navbar from './components/Navbar';

const App = () => {
  return (
    <div className="app-body">
      <Navbar />
      <SearchSection />
      <CategoryCarousel />
      <RecommendationsSection />
      <TourDetail />
      <Footer />
    </div>

  );
};

export default App;
