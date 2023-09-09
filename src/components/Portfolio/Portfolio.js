import React from "react";
import { Link } from "react-router-dom";

function Portfolio() {
  return (
    <section className="portfolio" aria-label="Портфолио.">
      <h2 className="portfolio__title">Портфолио</h2>
      <ul className="portfolio__list">
        <li className="portfolio__link">
          <Link to="https://github.com/Tivavti/how-to-learn"
            className="portfolio__link-container"
            target="_blank"
            rel="noopener noreferrer"
          ><h3 className="portfolio__link-title">Статичный сайт</h3>
            <div className="portfolio__link-arrow"></div>
          </Link>
        </li>
        <li className="portfolio__link">
          <Link to="https://github.com/Tivavti/russian-travel"
            className="portfolio__link-container"
            target="_blank"
            rel="noopener noreferrer"
          >
            <h3 className="portfolio__link-title">Адаптивный сайт</h3>
            <div className="portfolio__link-arrow"></div>
          </Link>
        </li>
        <li className="portfolio__link">
          <Link to="https://github.com/Tivavti/react-mesto-api-full-gha"
            className="portfolio__link-container"
            target="_blank"
            rel="noopener noreferrer"
          >
            <h3 className="portfolio__link-title">Одностраничное приложение</h3>
            <div className="portfolio__link-arrow"></div>
          </Link>
        </li>
      </ul>
    </section>
  )
}

export default Portfolio;