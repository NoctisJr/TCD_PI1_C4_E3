import Navbar from "../../components/Navbar";
import SearchSection from "../../components/utils/SearchSection";
import CategoryCarousel from "../../components/utils/Carousel/CategoryCarousel";
import RecommendationsSection from "../../components/utils/RecommendationsSection";
import Footer from "../../components/Footer";
//import TourDetail from "../../components/TourDetail/TourDetail";
import "./Home.css"

const Home = () => {
  return (
    <div className="home-body">
      <Navbar/>
      <SearchSection/>
      <CategoryCarousel />
      <RecommendationsSection />
      <Footer/>
    </div>
  );
};

export default Home;
