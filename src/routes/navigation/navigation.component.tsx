import { Fragment } from "react";
import { Outlet } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import LCCLogo from "../../assets/logo.png";
import CartIcon from "../../components/cart-icon/cart-icon.component";
import CartDropDown from "../../components/cart-dropdown/cart-dropdown.component";

import { selectIsCartOpen } from "../../store/cart/cart.selector";
import { selectCurrentUser } from "../../store/user/user.selector";
import { signOutStart } from "../../store/user/user.action";

import {
  NavigationContainer,
  NavLinks,
  NavLink,
  LogoContainer,
  Logo,
  ExtLink,
} from "./navigation.styles";

const Navigation = () => {
  const currentUser = useSelector(selectCurrentUser);
  const isCartOpen = useSelector(selectIsCartOpen);
  const dispatch = useDispatch();
  const signOutUser = () => dispatch(signOutStart());

  return (
    <Fragment>
      <NavigationContainer>
        <LogoContainer to="/">
          <Logo src={LCCLogo} className="logo" alt="logo" />
        </LogoContainer>
        <NavLinks>
          <NavLink to="/about">ABOUT</NavLink>
          <NavLink to="/events">EVENTS</NavLink>
          <NavLink to="/volunteer">VOLUNTEER</NavLink>
          {/* <NavLink to="/shop">SHOP</NavLink> */}
          <ExtLink
            href="https://ladycrushcrew.square.site/"
            target="_blank"
            rel="noreferrer"
          >
            SHOP
          </ExtLink>
          {currentUser ? (
            <NavLink as="span" onClick={signOutUser}>
              SIGN OUT
            </NavLink>
          ) : (
            <NavLink to="/auth">SIGN IN</NavLink>
          )}
          {/* <CartIcon /> */}
        </NavLinks>
        {/* {isCartOpen && <CartDropDown />} */}
      </NavigationContainer>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;
