import "./ProductCard.css";

const ProductCard = ({ product }) => {
  <div className="product-card">
    <h2 className="product-title">{product.name}</h2>
    <p className="product-description">{product.description}</p>
  </div>;
};

export default ProductCard;
