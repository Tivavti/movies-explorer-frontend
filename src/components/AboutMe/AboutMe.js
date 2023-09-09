import React from "react";

import MyFoto from "../../images/example-foto.jpg";

function AboutMe() {
  return (
    <section className="about-me" aria-label="Обо мне." id="about-me">
      <h2 className="about-me__title title">Студент</h2>
      <div className="about-me__container">
        <div className="about-me__info">
          <h3 className="about-me__info-name">Виталий</h3>
          <p className="about-me__info-profession">Фронтенд-разработчик, 30 лет</p>
          <p className="about-me__info-about">Я родился и живу в Саратове, закончил факультет экономики СГУ. У меня есть жена
            и дочь. Я люблю слушать музыку, а ещё увлекаюсь бегом. Недавно начал кодить. С 2015 года работал в компании «СКБ Контур». После того, как прошёл курс по веб-разработке, начал заниматься фриланс-заказами и ушёл с постоянной работы.</p>
          <a href="https://github.com/Tivavti" className="about-me__info-link" target="_blank"
            rel="noopener noreferrer">Github</a></div>
        <img
          className="about-me__foto"
          src={MyFoto}
          alt="Моя фотография."
        />
      </div>
    </section>
  )
}

export default AboutMe;
