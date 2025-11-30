import type { CategoryItemProps } from "../../types";
import { CategoryItem } from "../category-item/CategoryItem";
import "./categories.styles.scss";

interface categoriesProps {
  categories: CategoryItemProps[];
}

export const CategoriesList = ({ categories }: categoriesProps) => {
  return (
    <div className="categories-container">
      {categories.map((category: CategoryItemProps) => (
        <CategoryItem key={category.id} {...category} />
      ))}
    </div>
  );
};
