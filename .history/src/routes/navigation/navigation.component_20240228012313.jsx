import { Outlet, Link } from "react-router-dom"
import { Fragment, useContext } from "react";
import { ReactComponent as CrwnLogo } from "../../assets/crown.svg";
//import './navigation.styles.jsx';
import { UserContext } from "../../contexts/user.context";
import { CartContext } from "../../contexts/cart.context";
import { signOutUser } from "../../utils/firebase/firebase.utils";
import CartIcon from "../../components/cart-icon/cart-icon.component";
import CartDropdown from "../../components/cart-dropdown/cart-dropdown.component";
import { NavigationContainer } from "./navigation.styles.jsx";

const Navigation = () =>{
  const { currentUser } = useContext(UserContext);
  const { isCartOpen } = useContext(CartContext);

    return (
      <Fragment>
        <NavigationContainer>
            {/* <Link className="logo-container" to='/'>
                <CrwnLogo />
            </Link>

          <div className="nav-links-container">
            <Link className="nav-link"  to='/shop'>
                SHOP
            </Link>
            {
              currentUser ? (
                <span className='nav-link' onClick={signOutUser}> SIGN OUT</span>
               ) : (<Link className="nav-link"  to='/auth'>
                SIGN IN
            </Link>
              )}
              <CartIcon />
          </div>
          {isCartOpen && <CartDropdown />} */}
        </NavigationContainer>
        <Outlet />
      </Fragment>
    )
  }

  export default Navigation;