import type { CartItemModel } from "../../types";
import "./CartItem.style.scss";

export const CartItem = ({ cartItem }: CartItemModel) => {
  const { name, quantity } = cartItem;
  return (
    <div>
      <h2>{name}</h2>
      <span>{quantity}</span>
    </div>
  );
};
