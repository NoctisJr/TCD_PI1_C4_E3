import { useNavigate } from "react-router-dom";
import "./ProductCard.css";

const ProductCard = ({ product }) => {
  const navigate = useNavigate();

  const handleReserve = () => {
    navigate(`/tours/${product.id}`);
  };

  return (
    <div className="product-card">
      <div className="product-image-container">
        <img src={product.image} alt={product.name} className="product-image" />
      </div>

      <h2 className="product-title">{product.name}</h2>
      <p className="product-description">{product.description}</p>
      <div className="button-container">
        <button className="button more-info">Saber más</button>
        <button className="button reserve" onClick={handleReserve}>
          Reservar
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
