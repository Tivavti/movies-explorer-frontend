import React from "react";

import Auth from "../Auth/Auth";

function Register() {
  return (
    <main className="register">
      <Auth
        welcome="Добро пожаловать!"
        buttonText="Зарегистрироваться"
        formText="Уже зарегистрированы?"
        link="Login"
        linkText="Войти"
      >
        <label className="auth__caption">Имя
          <input
            required
            className="auth__input"
            name="name"
            type="name"
            placeholder="Обязательное поле"
            minLength="2"
            maxLength="30"
          />
        </label>
        <label className="auth__caption">E-mail
          <input
            required
            className="auth__input"
            name="email"
            type="email"
            placeholder="Обязательное поле"
            minLength="2"
            maxLength="30"
          />
        </label>
        <label className="auth__caption">Пароль
          <input
            required
            className="auth__input"
            name="password"
            type="password"
            placeholder="Обязательное поле"
            minLength="2"
            maxLength="30"
          />
          <span className="auth__error">Что-то пошло не так...</span>
        </label>
      </Auth>
    </main>
  )
}

export default Register;
