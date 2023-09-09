import React from 'react';

function Footer() {
  return (
    <footer className="footer">
      <h4 className="footer__title">Учебный проект Яндекс.Практикум х BeatFilm.</h4>
      <div className="footer__container">
        <p className="footer__item footer__item-year">&copy; {new Date().getFullYear()} </p>
        <ul className="footer__links">
          <li><a href="https://practicum.yandex.ru/" className="footer__item" target="_blank"
            rel="noopener noreferrer">Яндекс.Практикум</a></li>
          <li><a href="https://github.com/" className="footer__item" target="_blank"
            rel="noopener noreferrer">Github</a></li>
        </ul>
      </div >
    </footer >
  )
}

export default Footer;