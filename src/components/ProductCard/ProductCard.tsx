import { useContext } from "react";
import type { ProductProps } from "../../types";
import Button from "../Button/Button";
import "./ProductCard.styles.scss";
import { CartContext } from "../../context/Cart/Cart.Context";

export const ProductCard = ({ product }: ProductProps) => {
  const { imageUrl, name, price } = product;
  const { addItemToCart } = useContext(CartContext);

  const AddProductToCart = () => addItemToCart(product);
  return (
    <div className="product-card-container">
      <img src={imageUrl} alt={`${name}`} />
      <div className="footer">
        <span className="name">{name}</span>
        <span className="price">{price}</span>
      </div>
      <Button buttonType="inverted" onClick={AddProductToCart}>
        Add to card
      </Button>
    </div>
  );
};
