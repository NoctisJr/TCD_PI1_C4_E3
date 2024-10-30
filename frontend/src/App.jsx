// App.jsx
// import React from 'react';
// import './App.css';
// import SearchSection from './components/utils/SearchSection'
// import CategoryCarousel from './components/utils/Carousel/CategoryCarousel';
// import RecommendationsSection from './components/utils/RecommendationsSection';
// import TourDetail from './components/TourDetail';

import { BrowserRouter } from "react-router-dom";
import AppRouter from "./routes/AppRouter";

const App = () => {
  // return (
  //   <div className="app-body">
  //     <SearchSection />
  //     <CategoryCarousel />
  //     <RecommendationsSection />
  //     <TourDetail />
  //   </div>

  // );
  return (
    <BrowserRouter>
      <AppRouter />
    </BrowserRouter>
  );
};

export default App;
