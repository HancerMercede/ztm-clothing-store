import { Link } from "react-router-dom";
import type { CategoryPreviewProps } from "../../types";
import { ProductCard } from "../ProductCard/ProductCard";
import "./CategoryPreview.styles.scss";

export const CategoryPreview = ({ title, products }: CategoryPreviewProps) => {
  return (
    <div className="category-preview-container">
      <h2>
        <Link className="title" to={title}>
          {title.toUpperCase()}
        </Link>
      </h2>
      <div className="preview">
        {products
          .filter((_, idx) => idx < 4)
          .map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
      </div>
    </div>
  );
};
