import React from "react";
import { Link } from "react-router-dom";

import Header from "../Header/Header";

function Profile() {
  return (
    <div className="profile">
      <Header />
      <main className="profile__main">
        <p className="profile__welcome">
          Привет, Виталий!
        </p>
        <form className="profile__form">
          <label className="profile__name profile__field">
            <span className="profile__placeholder">Имя</span>
            <input
              required
              className="profile__input"
              name="name"
              type="name"
              minLength="2"
              maxLength="30"
              value="Виталий"
            />
          </label>
          <label className="profile__email profile__field">
            <span className="profile__placeholder">E-mail</span>
            <input
              required
              className="profile__input"
              name="email"
              type="email"
              minLength="2"
              maxLength="30"
              value="pochta@yandex.ru"
            /></label>
          <button type="submit" className="profile__button">Редактировать</button>
        </form>
        <Link to="/signout" className="profile__link">Выйти из аккаунта</Link>
      </main>
    </div>
  );
}

export default Profile;
