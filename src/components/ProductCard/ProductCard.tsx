import type { ProductProps } from "../../types";
import Button from "../Button/Button";
import "./ProductCard.styles.scss";

export const ProductCard = ({ product }: ProductProps) => {
  const { imageUrl, name, price } = product;
  return (
    <div className="product-card-container">
      <img src={imageUrl} />
      <div className="footer">
        <span className="name">{name}</span>
        <span className="price">{price}</span>
      </div>
      <Button buttonType="inverted">Add to card</Button>
    </div>
  );
};
