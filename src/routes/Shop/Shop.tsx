import { Routes, Route } from "react-router-dom";
import "./Shop.styles.scss";
import { CategoriesPreview } from "../Categories-Preview/CategoriesPreview";
import { Category } from "../Category/Category";

export const Shop = () => {
  return (
    <Routes>
      <Route index element={<CategoriesPreview />} />
      <Route path=":category" element={<Category />} />
    </Routes>
  );
};
