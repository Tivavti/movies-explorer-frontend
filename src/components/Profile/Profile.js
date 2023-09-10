import React from "react";
import { Link } from "react-router-dom";

import Header from "../Header/Header";

function Profile({ onSideMenu }) {
  return (
    <div className="profile">
      <Header
        onSideMenu={onSideMenu}
      />
      <main className="profile__main">
        <section className="profile__section" aria-label="Профайл.">
          <h1 className="profile__welcome">
            Привет, Виталий!
          </h1>
          <form className="profile__form">
            <label className="profile__name profile__field">
              <span className="profile__placeholder">Имя</span>
              <input
                required
                className="profile__input"
                name="name"
                type="text"
                minLength="2"
                maxLength="30"
                value="Виталий"
                placeholder="Имя"
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
                placeholder="email"
              /></label>
            <button type="submit" className="profile__button">Редактировать</button>
          </form>
          <Link to="/" className="profile__link">Выйти из аккаунта</Link>
        </section>
      </main>
    </div>
  );
}

export default Profile;
