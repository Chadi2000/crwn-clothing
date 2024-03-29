import { Outlet, Link } from "react-router-dom"
import { Fragment } from "react";
import { ReactComponent as CrwnLogo } from "../../assets/crown.svg";
import './navigation.styles.scss';
const Navigation = () =>{
    return (
      <div>
        <div className="navigation">
            <Link className="logo-container" to='/'>
                <CrwnLogo />
            </Link>

          <div className="nav-links-container">
            <Link className="nav-link"  to='/shop'>
                SHOP
            </Link>
            <Link className="nav-link"  to='/signIn'>
                SIGN IN
            </Link>
          </div>
        </div>  
        <Outlet />
      </div>
    )
  }

  export default Navigation;