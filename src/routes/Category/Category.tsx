import { useParams } from "react-router-dom";
import "./Category.styles.scss";
import { useContext } from "react";
import { CategoriesContext } from "../../context/Categories/Categories.Context";
import type { Product } from "../../types";
import { ProductCard } from "../../components/ProductCard/ProductCard";

export const Category = () => {
  const { category } = useParams();
  const { categoriesMap } = useContext(CategoriesContext);

  const products: Product[] = category ? categoriesMap[category] : [];

  return (
    <>
      <h2 className="category-title">{category?.toUpperCase()}</h2>
      <div className="category-container">
        {products &&
          products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
      </div>
    </>
  );
};
