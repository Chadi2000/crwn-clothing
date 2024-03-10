import { Outlet, Link } from "react-router-dom"
import { Fragment, useContext } from "react";
import { ReactComponent as CrwnLogo } from "../../assets/crown.svg";
//import './navigation.styles.jsx';
import { UserContext } from "../../contexts/user.context";
import { CartContext } from "../../contexts/cart.context";
import { signOutUser } from "../../utils/firebase/firebase.utils";
import CartIcon from "../../components/cart-icon/cart-icon.component";
import CartDropdown from "../../components/cart-dropdown/cart-dropdown.component";
import { 
  NavigationContainer,
   NavLinksContainer,
    NavLink, LogoContainer } from "./navigation.styles.jsx";

const Navigation = () =>{
  const { currentUser } = useContext(UserContext);
  const { isCartOpen } = useContext(CartContext);

    return (
      <Fragment>
        <NavigationContainer>
            <LogoContainer to='/'>
                <CrwnLogo />
            </LogoContainer>

          <NavLinksContainer >
            <NavLink to='/shop'>
                SHOP
            </NavLink>
            {
              currentUser ? (
                <span onClick={signOutUser}> SIGN OUT</span>
               ) : (<NavLink to='/auth'>
                SIGN IN
            </NavLink>
              )}
              <CartIcon />
          </NavLinksContainer>
          {isCartOpen && <CartDropdown />}
        </NavigationContainer>
        <Outlet />
      </Fragment>
    )
  }

  export default Navigation;