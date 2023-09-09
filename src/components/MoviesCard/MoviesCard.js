import React, { useState } from "react";
import { useLocation } from "react-router-dom";

import cardPoster from "../../images/example-pic.jpg";

function MoviesCard({ card }) {
  const location = useLocation();
  const [isSaved, setSaved] = useState(false);

  function handleSaveClick() {
    setSaved(!isSaved);
  };
  return (
    <section className="movies-card" aria-label="Карточка фильма.">
      <img className="movies-card__image" src={cardPoster} alt={`Постер фильма ${card}`} />
      <h2 className="movies-card__title">33 слова о дизайне</h2>
      <>
        {location.pathname === "/movies" && (
          <button
            className={`movies-card__save-button ${isSaved ? "movies-card__save-button_active" : ""}`}
            type="button"
            aria-label="Сохранить."
            onClick={handleSaveClick}
          />
        )}
        {location.pathname === "/saved-movies" && (
          <button
            className="movies-card__delete-button"
            type="button"
            aria-label="Удалить."
            onClick={handleSaveClick}
          />
        )}
      </>
      <p className="movies-card__duration">1ч42м</p>
    </section>
  )
}

export default MoviesCard;