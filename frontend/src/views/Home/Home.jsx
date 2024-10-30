import SearchSection from "../../components/utils/SearchSection";
import CategoryCarousel from "../../components/utils/Carousel/CategoryCarousel";
import RecommendationsSection from "../../components/utils/RecommendationsSection";
import TourDetail from "../../components/TourDetail";
import "./Home.css"

const Home = () => {
  return (
    <div>
      <SearchSection />
      <CategoryCarousel />
      <RecommendationsSection />
      <TourDetail />
    </div>
  );
};

export default Home;
