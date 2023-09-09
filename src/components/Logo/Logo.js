import React from "react";
import { Link } from "react-router-dom";
import headerLogo from "../../images/logo.svg";

function Logo() {
  return (
    <div className="logo">
      <Link to="/" className="header__logo-link">
        <img
          className="header__logo"
          src={headerLogo}
          alt="Улыбающееся лицо."
        />
      </Link>
    </div>
  );
}

export default Logo;
