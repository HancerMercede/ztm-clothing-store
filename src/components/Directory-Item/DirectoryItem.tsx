import { useNavigate } from "react-router-dom";
import type { CategoryItemProps } from "../../types";
import "./DirectoryItem.styles.scss";

export const DirectoryItem = ({ category }: CategoryItemProps) => {
  const { title, imageUrl, route } = category;
  const navigate = useNavigate();

  const onNavigateHandler = () => navigate(route);
  return (
    <div className="directory-item-container" onClick={onNavigateHandler}>
      <div
        className="background-image"
        style={{ backgroundImage: `url(${imageUrl})` }}
      />
      <div className="directory-item-body-container">
        <h2>{title}</h2>
        <p>Shop Now </p>
      </div>
    </div>
  );
};
