import React from "react";


function PageNotFound() {
  function back() {
    window.history.go(-1);
  }

  return (
    <main className="not-found">
      <section className="not-found__section" aria-label="Страница не найдена.">
        <p className="not-found__digits">404</p>
        <h1 className="not-found__title">
          Страница не найдена
        </h1>
        <button className="not-found__link-to-main" type="button" onClick={back}>Назад</button>
      </section>
    </main>
  )
}

export default PageNotFound; 