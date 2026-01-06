import Button from "../Button/Button";
import "./CartDropdown.styles.scss";
import { CartItem } from "../Cart-Item/CartItem";
import { useContext } from "react";
import { CartContext } from "../../context/Cart/Cart.Context";
import { useNavigate } from "react-router-dom";

export const CartDropdown = () => {
  const { cartItems } = useContext(CartContext);

  const navigate = useNavigate();

  const goToCheckOutHandler = () => {
    navigate("/checkout");
  };

  return (
    <div className="cart-dropdown-container">
      <div className="cart-items">
        {cartItems.length ? (
          cartItems.map((item) => <CartItem key={item.id} cartItem={item} />)
        ) : (
          <span className="empty-message">Your cart is empty!</span>
        )}
      </div>
      <Button buttonType="button" onClick={goToCheckOutHandler}>
        Go to checkout
      </Button>
    </div>
  );
};
