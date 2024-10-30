import { useEffect, useState } from "react";
import mockProducts from "../../utils/functions/mockProducts";
import randomData from "../../utils/functions/randomData";
import ProductGrid from "../../components/ProductGrid/ProductGrid";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [visibleProducts, setVisibleProducts] = useState(10);

  useEffect(() => {
    setProducts(randomData(mockProducts))
  }, [])

  const handleLoadMoreProducts = () => {
    setVisibleProducts((prevCount) => prevCount + 10)
  }

  return (
    <div>
      <h1>Productos</h1>
      <ProductGrid products={products.slice(0, visibleProducts)} />
      {visibleProducts < products.length && (
        <button onClick={handleLoadMoreProducts}>Cargar más productos</button>
      )}
    </div>
  );
};

export default Products;
