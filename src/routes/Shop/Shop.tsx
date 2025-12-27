import { useContext } from "react";
import { ProductsContext } from "../../context/Products/Products.Context";

import "./Shop.styles.scss";
import { ProductCard } from "../../components/ProductCard/ProductCard";
export const Shop = () => {
  const { products } = useContext(ProductsContext);
  return (
    <div className="products-container">
      {products.map((p) => (
        <ProductCard key={p.id} product={p} />
      ))}
    </div>
  );
};
