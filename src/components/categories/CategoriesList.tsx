import type { CategoriesListProps } from "../../types";
import { CategoryItem } from "../category-item/CategoryItem";
import "./categories.styles.scss";

export const CategoriesList = ({ categories }: CategoriesListProps) => {
  return (
    <div className="categories-container">
      {categories.map((category) => (
        <CategoryItem key={category.id} category={category} />
      ))}
    </div>
  );
};
