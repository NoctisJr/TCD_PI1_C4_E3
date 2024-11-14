import { useEffect, useState } from "react";
import mockTours from "../../utils/functions/mockTours";
import randomData from "../../utils/functions/randomData";
import ProductGrid from "../../components/ProductGrid/ProductGrid";
import "./Tours.css";
import NavBar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import BtnPrimary from "../../components/Buttons/BtnPrimary/BtnPrimary";

const Tours = () => {
  const [tours, setTours] = useState([]);
  const [visibleTours, setVisibleTours] = useState(6);

  useEffect(() => {
    setTours(randomData(mockTours));
  });

  const handleLoadMoreTours = () => {
    setVisibleTours((prevCount) => prevCount + 3);
  };

  return (
    <div className="container-tours">
      <NavBar />
      <div className="tours-container">
        <h1 className="tours-title">Tours</h1>
        <p>
          Descubre la emoción de la aventura con nuestros tours únicos. Explora
          nuevos destinos, desafía tus límites y vive experiencias inolvidables.
          ¡Revisa nuestros tours y empieza tu próxima gran aventura hoy mismo!
        </p>
        <ProductGrid products={tours.slice(0, visibleTours)} />
        {visibleTours < tours.length && (
          <BtnPrimary
            children="Cargar más tours"
            onClick={handleLoadMoreTours}
            className="btn-primarySection"
          />
        )}
      </div>

      <Footer />
    </div>
  );
};

export default Tours;
