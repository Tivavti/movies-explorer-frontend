import { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../Logo/Logo";

function Auth({ welcome, children, buttonText, formText, link, linkText, isValid, handleSubmit }) {
  const [isLoading, setLoading] = useState(false);

  function onSubmit(evt) {
    handleSubmit(evt, setLoading);
    setLoading(true);
  }

  return (
    <div className="auth">
      <Logo />
      <h1 className="auth__welcome">
        {welcome}
      </h1>
      <form className="auth__form" onSubmit={onSubmit} noValidate>
        {children}
        {isLoading ?
          <button type="button" className="auth__button auth__button_disabled" disabled={true}>Проверяем...</button>
          :
          <input className={isValid ? "auth__button" : "auth__button auth__button_disabled"} type="submit" value={buttonText} disabled={!isValid} />
        }
      </form>
      <div className="auth__footer">
        <p className="auth__link-text">{formText}
          <Link to={link} className="auth__link"> {linkText}</Link></p>
      </div>
    </div>
  );
}

export default Auth;