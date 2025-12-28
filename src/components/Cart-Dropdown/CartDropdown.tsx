import Button from "../Button/Button";
import "./CartDropdown.styles.scss";
import { CartItem } from "../Cart-Item/CartItem";
import { useContext } from "react";
import { CartContext } from "../../context/Cart/Cart.Context";

export const CartDropdown = () => {
  const { cartItems } = useContext(CartContext);
  return (
    <div className="cart-dropdown-container">
      <div className="cart-items">
        {cartItems.map((item) => (
          <CartItem key={item.id} cartItem={item} />
        ))}
      </div>
      <Button buttonType="button">Go to checkout</Button>
    </div>
  );
};
