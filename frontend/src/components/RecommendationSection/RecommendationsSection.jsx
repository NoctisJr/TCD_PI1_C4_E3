import "./recommendationSection.css";
import RecommendationDetailCard from "../RecommendationDetailCard/RecommendationDetailCard";
import { useNavigate } from "react-router-dom";
import BtnPrimary from "../Buttons/BtnPrimary/BtnPrimary";

const tour1 = {
  id: 1,
  name: "Tour Escalada en la Mojarra",
  description:
    "Disfruta de una emocionante aventura de escalada en uno de los destinos más hermosos.",
  category: "Escalada",
  image: "/assets/mojarra1.jpg",
  images: [
    "https://images.pexels.com/photos/2847362/pexels-photo-2847362.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.unsplash.com/photo-1420393000485-4697383da9ec?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.pexels.com/photos/1543756/pexels-photo-1543756.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/1574216/pexels-photo-1574216.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  ],
};
const RecommendationsSection = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/tours");
    window.scrollTo(0, 0); // volver a la parte de arriba de la página.
  };

  return (
    <div className="container">
      <div className="title-container">
        <h2>Tours Recomendados</h2>
        <div className="description-container">
          <p className="description-tours">
            Esta temporada, ya sea que regreses a casa o busques nuevos
            horizontes, nuestros tours de aventura recomendados te llevarán a
            destinos únicos para vivir experiencias emocionantes y llenas de
            adrenalina.
          </p>
          <BtnPrimary children={"Ver Tours"} onClick={handleClick} className="btn-primarySection"/>
          
        </div>
      </div>

      <div className="recommendations-section">
        <RecommendationDetailCard
          nameTour={tour1.name}
          description={tour1.description}
          key={tour1.id}
          onClick={handleClick}
        />
        <div className="images-container">
          {tour1.images.map((img, index) => (
            <div key={index} className="image-item">
              <img
                src={img}
                alt={`tour-image-${index}`}
                className="tour-image"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RecommendationsSection;
