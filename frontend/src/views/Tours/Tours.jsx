import { useEffect, useState } from "react";
import mockTours from "../../utils/functions/mockTours";
import randomData from "../../utils/functions/randomData";
import ProductGrid from "../../components/ProductGrid/ProductGrid";
import "./Tours.css"

const Tours = () => {
  const [tours, setTours] = useState([]);
  const [visibleTours, setVisibleTours] = useState(6);

  useEffect(() => {
    setTours(randomData(mockTours))
  })

  const handleLoadMoreTours = () => {
    setVisibleTours((prevCount) => prevCount + 3)
  }

  return (
    <div className="tours-container">
      <h1 className="tours-title">Tours</h1>
      <ProductGrid products={tours.slice(0, visibleTours)} />
      {visibleTours < tours.length && (
        <button onClick={handleLoadMoreTours} className="load-more-button">Cargar más tours</button>
      )}
    
    </div>
  )
}

export default Tours
