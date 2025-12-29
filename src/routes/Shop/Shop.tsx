import { useContext } from "react";
import { CategoriesContext } from "../../context/Products/Categories.Context";
import "./Shop.styles.scss";

import { CategoryPreview } from "../../components/Category-Preview/CategoryPreview";
export const Shop = () => {
  const { categoriesMap } = useContext(CategoriesContext);
  return (
    <div className="shop-container">
      {Object.keys(categoriesMap).map((title) => {
        const products = categoriesMap[title];
        return (
          <CategoryPreview key={title} title={title} products={products} />
        );
      })}
    </div>
  );
};
