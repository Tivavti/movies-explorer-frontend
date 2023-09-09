import React from "react";
import { Link } from "react-router-dom";

function PageNotFound() {
  return (
    <main className="not-found">
      <section className="not-found__section" aria-label="Страница не найдена.">
        <p className="not-found__digits">404</p>
        <h1 className="not-found__title">
          Страница не найдена
        </h1>
        <Link className="not-found__link-to-main" to="/">Назад</Link>
      </section>
    </main>
  )
}

export default PageNotFound; 