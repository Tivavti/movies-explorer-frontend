import React from "react";
import { Link, useLocation } from "react-router-dom";
import ProfileButton from "../ProfileButton/ProfileButton";

function Navigation({ isLoggedIn, onSideMenu }) {
  const location = useLocation();

  return (
    <nav className="nav">
      {!isLoggedIn ? (
        <ul className="nav__container">
          <li>
            <Link to="/signup" className="nav__signup">
              Регистрация
            </Link>
          </li>
          <li>
            <Link to="/signin" className="nav__signin">
              Войти
            </Link>
          </li>
        </ul>
      ) : (
        <>
          <ul className="nav__container-active">
            <li className="nav__list">
              <Link to="/movies" className={`nav__item ${location.pathname === "/movies" ? "nav__item_active" : ""}`}>
                Фильмы
              </Link>
              <Link to="/saved-movies" className={`nav__item ${location.pathname === "/saved-movies" ? "nav__item_active" : ""}`}>
                Сохранённые фильмы
              </Link>
            </li>
            <li>
              <ProfileButton />
            </li>
          </ul>
          <button
            type="button"
            aria-label="Кнопка вызова бокового меню."
            className="menu__toggle"
            onClick={onSideMenu} >
          </button>
        </>
      )}
    </nav>
  );
}

export default Navigation;
