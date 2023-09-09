import React from "react";
import { Link } from "react-router-dom";
import headerLogo from "../../images/logo.svg";

function Logo() {
  return (
    <div className="logo">
      <Link to="/" className="logo__link">
        <img
          className="logo__image"
          src={headerLogo}
          alt="Улыбающееся лицо."
        />
      </Link>
    </div>
  );
}

export default Logo;
