import { useContext } from "react";
import ShoppingIcon from "../../assets/shopping-bag.svg?react";
import "./CartIcon.styles.scss";
import { CartContext } from "../../context/Cart/Cart.Context";

export const CartIcon = () => {
  const { isCartOpen, setIsCartOpen } = useContext(CartContext);

  const ToggleIsCartOpen = () => setIsCartOpen(!isCartOpen);
  return (
    <div className="cart-icon-container" onClick={ToggleIsCartOpen}>
      <ShoppingIcon className="shopping-icon" />
      <span className="item-count">0</span>
    </div>
  );
};
