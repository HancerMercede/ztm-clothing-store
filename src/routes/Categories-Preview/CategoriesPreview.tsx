import { useContext } from "react";
import { CategoriesContext } from "../../context/Categories/Categories.Context";
import { CategoryPreview } from "../../components/Category-Preview/CategoryPreview";
export const CategoriesPreview = () => {
  const { categoriesMap } = useContext(CategoriesContext);

  return (
    <>
      {Object.keys(categoriesMap).map((title) => {
        const products = categoriesMap[title];
        return (
          <CategoryPreview key={title} title={title} products={products} />
        );
      })}
    </>
  );
};
