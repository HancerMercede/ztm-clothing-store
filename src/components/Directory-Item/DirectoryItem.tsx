import type { CategoryItemProps } from "../../types";
import "./DirectoryItem.styles.scss";

export const DirectoryItem = ({ category }: CategoryItemProps) => {
  const { title, imageUrl } = category;
  return (
    <div className="directory-item-container">
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
