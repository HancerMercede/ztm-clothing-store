import type { CategoriesListProps } from "../../types";
import { DirectoryItem } from "../Directory-Item/DirectoryItem";
import "./Categories.styles.scss";

export const CategoriesList = ({ categories }: CategoriesListProps) => {
  return (
    <div className="categories-container">
      {categories.map((category) => (
        <DirectoryItem key={category.id} category={category} />
      ))}
    </div>
  );
};
