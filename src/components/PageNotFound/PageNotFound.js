import React from "react";
import { Link } from "react-router-dom";

function PageNotFound() {
  return (
    <main className="not-found">
      <p className="not-found__digits">404</p>
      <h2 className="not-found__title">
        Страница не найдена
      </h2>
      <Link className="not-found__link-to-main" to="/">Назад</Link>
    </main>
  )
}

export default PageNotFound; 