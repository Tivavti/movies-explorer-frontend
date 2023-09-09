import React from "react";

function Portfolio() {
  return (
    <section className="portfolio" aria-label="Портфолио.">
      <h2 className="portfolio__title">Портфолио</h2>
      <ul className="portfolio__list">
        <li className="portfolio__link-container">
          <p className="portfolio__link-title">Статичный сайт</p>
          <a className="portfolio__link"
            href="https://github.com/Tivavti/how-to-learn"
            target="_blank"
            rel="noopener noreferrer">&#129125;</a>
        </li>
        <li className="portfolio__link-container">
          <p className="portfolio__link-title">Адаптивный сайт</p>
          <a className="portfolio__link"
            href="https://github.com/Tivavti/how-to-learn"
            target="_blank"
            rel="noopener noreferrer">&#129125;</a>
        </li>
        <li className="portfolio__link-container">
          <p className="portfolio__link-title">Одностраничное приложение</p>
          <a className="portfolio__link"
            href="https://github.com/Tivavti/react-mesto-api-full-gha"
            target="_blank"
            rel="noopener noreferrer">&#129125;</a>
        </li>
      </ul>
    </section>
  )
}

export default Portfolio;