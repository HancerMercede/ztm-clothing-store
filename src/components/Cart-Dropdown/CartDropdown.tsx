import Button from "../Button/Button";
import "./CartDropdown.styles.scss";

export const CartDropdown = () => {
  return (
    <div className="cart-dropdown-container">
      <div className="cart-items"></div>
      <Button buttonType="button">Go to checkout</Button>
    </div>
  );
};
