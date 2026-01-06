import { useContext } from "react";
import "./CheckOut.styles.scss";
import { CartContext } from "../../context/Cart/Cart.Context";
import { CheckOutItem } from "../../components/CheckOutItem/CheckOutItem";

export const CheckOut = () => {
  const { cartItems, cartTotal } = useContext(CartContext);
  return (
    <div className="checkout-container">
      <div className="checkout-header">
        <div className="header-block">Product</div>
        <div className="header-block">Description</div>
        <div className="header-block">Quantity</div>
        <div className="header-block">Price</div>
        <div className="header-block">Remove</div>
      </div>
      {cartItems.map((item) => (
        <CheckOutItem key={item.id} cartItem={item} />
      ))}
      <span className="total">Total: ${cartTotal}</span>
    </div>
  );
};
