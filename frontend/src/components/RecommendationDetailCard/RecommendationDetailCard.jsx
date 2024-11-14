import { FaStar } from "react-icons/fa6";
import BtnSecondary from "../Buttons/BtnSecondary/BtnSecondary";
import "./RecommendationDetailCard.css";

const RecommendationDetailCard = ({ nameTour, description, onClick }) => {
  return (
    <div className="card-container">
      <div className="card-detail">
        <h3 className="title">{nameTour}</h3>
        <span className="rating">
          <FaStar size={16} color="#282828" />
          <FaStar size={16} color="#282828" />
          <FaStar size={16} color="#282828" />
        </span>
      </div>
      <p className="description">{description}</p>
      <BtnSecondary onClick={onClick}>Reservar</BtnSecondary>
    </div>
  );
};

export default RecommendationDetailCard;
