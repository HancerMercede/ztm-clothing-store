import { Outlet, Link } from "react-router-dom";
import CrownLogo from "../../assets/crown.svg?react";
import "./navigation.style.scss";
import { useContext } from "react";
import { UserContext } from "../../context/User.Context";
import { signOutUser } from "../../utils/Firebase/firebase";

const NavigationBar = () => {
  const { currentUser } = useContext(UserContext);

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
        </div>
      </div>
      <Outlet />
    </>
  );
};

export default NavigationBar;
