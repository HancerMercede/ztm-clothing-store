import { Outlet, Link } from "react-router-dom";
import CrownLogo from "../../assets/crown.svg?react";
import { CartIcon } from "../../components/Cart-Icon/CartIcon";
import { CartDropdown } from "../../components/Cart-Dropdown/CartDropdown";
import "./navigation.style.scss";
import { useContext } from "react";
import { UserContext } from "../../context/Users/User.Context";
import { signOutUser } from "../../utils/Firebase/firebase";
import { CartContext } from "../../context/Cart/Cart.Context";

const NavigationBar = () => {
  const { currentUser } = useContext(UserContext);
  const { isCartOpen } = useContext(CartContext);

  return (
    <>
      <div className="navigation">
        <Link className="logo-container" to="/">
          <CrownLogo className="logo" />
        </Link>
        <div className="nav-links-container">
          <Link className="nav-link" to="/shop">
            SHOP
          </Link>
          <Link className="nav-link" to="/contact">
            CONTACT
          </Link>

          {currentUser ? (
            <span className="nav-link" onClick={signOutUser}>
              SIGN OUT
            </span>
          ) : (
            <Link className="nav-link" to="/auth">
              SIGN IN
            </Link>
          )}
          <CartIcon />
        </div>
        {isCartOpen && <CartDropdown />}
      </div>
      <Outlet />
    </>
  );
};

export default NavigationBar;
