import React, { useEffect, useState } from "react";

import Auth from "../Auth/Auth";
import { useFormWithValidation } from "../../hook/useFormWithValidation";
import { RegexEmail, RegexName } from "../../utils/constants";


function Register({ handleRegister }) {
  const [isFormValid, setFormValid] = useState(false);
  const { values, errors, handleChange, setErrors } = useFormWithValidation();

  useEffect(() => {
    if (errors.name || errors.email) {
      setFormValid(false);
    } else {
      setFormValid(true);
    }
  }, [errors]);

  function handleSubmit(evt, setLoading) {
    evt.preventDefault();

    handleRegister(values, setLoading);
  }

  function changeName(evt) {
    handleChange(evt);
    const { name, value } = evt.target;
    if (!RegexName.test(value)) {
      setErrors({ ...errors, [name]: "Поле name должно содержать только латиницу, кириллицу, пробел или дефис." });
    }
    else {
      setErrors({ ...errors, [name]: "" });
    }
  }

  function changeEmail(evt) {
    handleChange(evt);
    const { name, value } = evt.target;
    if (name === "email") {
      if (!RegexEmail.test(value)) {
        setErrors({ ...errors, email: "Поле email не соответствует шаблону электронной почты." });
      }
    }
  }

  return (
    <main className="register">
      <section className="register__section" aria-label="Регистрация.">
        <Auth
          welcome="Добро пожаловать!"
          buttonText="Зарегистрироваться"
          formText="Уже зарегистрированы?"
          link="/signin"
          linkText="Войти"
          isValid={isFormValid}
          handleSubmit={handleSubmit}
        >
          <label className="auth__caption">Имя
            <input
              onChange={changeName}
              value={values.name || ""}
              required
              className="auth__input"
              name="name"
              type="text"
              placeholder="Обязательное поле"
              minLength={2}
              maxLength={30}
            />
            <span className="auth__error">{errors.name}</span></label>
          <label className="auth__caption">E-mail
            <input
              onChange={changeEmail}
              value={values.email || ""}
              required
              className="auth__input"
              name="email"
              type="email"
              placeholder="Обязательное поле"
            />
            <span className="auth__error">{errors.email}</span></label>
          <label className="auth__caption">Пароль
            <input
              onChange={handleChange}
              value={values.password || ""}
              required
              className="auth__input"
              name="password"
              type="password"
              placeholder="Обязательное поле"
              minLength={2}
              maxLength={30}
            />
            <span className="auth__error">{errors.password}</span>
          </label>
        </Auth>
      </section>
    </main>
  )
}

export default Register;
