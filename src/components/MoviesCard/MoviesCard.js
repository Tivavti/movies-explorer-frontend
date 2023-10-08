import React, { useState } from "react";
import { useLocation } from "react-router-dom";

import { BASE_URL } from "../../utils/constants";

function MoviesCard({ movie, handleSave, handleDelete }) {
  const [isSaved, setSaved] = useState(false);

  const location = useLocation();
  const savedMovies = JSON.parse(localStorage.getItem("savedMovies"));
  const isLiked = savedMovies.find(savedMovie => savedMovie.movieId === movie.id);


  function handleSaveMovie() {
      handleSave(movie);
  };

  function handleDeleteMovie() {
    handleDelete(movie);
    setSaved(false);
  };

  function duration() {
    const hours = Math.floor(movie.duration / 60);
    const minutes = movie.duration - hours * 60;
    return `${hours}ч ${minutes}м`
  }

  return (
    <section className="movies-card" aria-label="Карточка фильма.">
      <a className="movies-card__link" href={movie.trailerLink} target="_blank"
        rel="noopener noreferrer">
        <img className="movies-card__image" src={movie.image.url ? `${BASE_URL}${movie.image.url}` : movie.image} alt={`Постер фильма ${movie.nameRu}`} />
      </a>
      <h2 className="movies-card__title">{movie.nameRU}</h2>
      <>
        {location.pathname === "/movies" && (
          <button
            className={`movies-card__save-button ${isSaved || isLiked ? "movies-card__save-button_active" : ""}`}
            type="button"
            aria-label="Сохранить."
            onClick={isSaved ? handleDeleteMovie : handleSaveMovie}
          />
        )}
        {location.pathname === "/saved-movies" && (
          <button
            className="movies-card__delete-button"
            type="button"
            aria-label="Удалить."
            onClick={handleDeleteMovie}
          />
        )}
      </>
      <p className="movies-card__duration">{duration(movie.duration)}</p>
    </section>
  )
}

export default MoviesCard;