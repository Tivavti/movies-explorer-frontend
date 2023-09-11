import React from "react";
import { useLocation } from "react-router-dom";
import Logo from "../Logo/Logo";
import Navigation from "../Navigation/Navigation";

function Header({ onSideMenu, isLoggedIn }) {
  const location = useLocation();

  return (
    <header className={`header ${location.pathname === '/' ? 'header_active' : ''} ${location.pathname === '/profile' ? 'profile__header' : ''}`}>
      {isLoggedIn ? (
        <div className="header__container">
          <Logo />
          <Navigation
            onSideMenu={onSideMenu}
            isLoggedIn={isLoggedIn}
          />
        </div>
      ) : (
        <div className="header__container-active">
          <Logo />
          <Navigation
            onSideMenu={onSideMenu}
            isLoggedIn={isLoggedIn}
          />
        </div>
      )}
    </header>
  );
}

export default Header;
