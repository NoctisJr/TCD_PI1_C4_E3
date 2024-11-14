import Navbar from "../../components/Navbar/Navbar";
import SearchSection from "../../components/SearchSection/SearchSection";
import CategoryCarousel from "../../components/utils/Carousel/CategoryCarousel";
import RecommendationsSection from "../../components/RecommendationSection/RecommendationsSection";
import Footer from "../../components/Footer/Footer";
import TourDetail from "../../components/TourDetail/TourDetail";
import Login from '../../components/LoginForm/LoginForm'
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
