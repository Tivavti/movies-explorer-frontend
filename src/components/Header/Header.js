import React from "react";
import { useLocation } from "react-router-dom";
import Logo from "../Logo/Logo";
import Navigation from "../Navigation/Navigation";

function Header({ onSideMenu, isLoggedIn }) {
  const location = useLocation();

  return (
    <header className={`header ${location.pathname === '/' ? 'header_active' : ''}`}>
      <Logo />
      <Navigation
        onSideMenu={onSideMenu}
        isLoggedIn={isLoggedIn}
      />
    </header>
  );
}

export default Header;
