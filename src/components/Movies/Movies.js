import React, { useState, useEffect } from "react";

import Header from "../Header/Header";
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import Footer from "../Footer/Footer";
import { getSavedMovies } from "../../utils/MainApi";

import {
  SHORT_MOVIE,
  MOVIECARD_16,
  MOVIECARD_8,
  MOVIECARD_5,
  MOVIECARD_4,
  MOVIECARD_2,
  MOVIECARD_1,
  DESKTOP_VIEW,
  MOBILE_VIEW
} from "../../utils/constants";
import { getMovies } from "../../utils/MoviesApi";

function Movies({ onSideMenu, isLoggedIn, setLoading, handleSave, handleDelete, setSavedMovies }) {
  const [searchQuery, setSearchQuery] = useState("");
  const [foundMovies, setFoundMovies] = useState([]);
  const [error, setError] = useState("");
  const [isToggleOn, setToggleOn] = useState((localStorage.getItem("isToggle") === "true") || false);
  const [movieToView, setMovieToView] = useState(foundMovies);
  const [isMoreButtonActive, setMoreButtonActive] = useState(false);
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    setSearchQuery(JSON.parse(localStorage.getItem("keyword")));
    if (localStorage.getItem("isToggle") === "true") {
      setFoundMovies(JSON.parse(localStorage.getItem("foundMoviesShort")));
    };
    if (localStorage.getItem("isToggle") === "false") {
      setFoundMovies(JSON.parse(localStorage.getItem("foundMovies")));
    };
  }, [isToggleOn])

  useEffect(() => {
    const moviesSaved = JSON.parse(localStorage.getItem("savedMovies"));
    if (!moviesSaved) {
      getSavedMovies()
        .then((movies) => {
          localStorage.setItem("savedMovies", JSON.stringify(movies));
          setSavedMovies(movies);
        })
        .catch(() => {
          setError("Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз");
        })
    } else {
      setSavedMovies(moviesSaved);
    }
  }, [setSavedMovies])

  useEffect(() => {
    if (movieToView.length < foundMovies.length) {
      setMoreButtonActive(true);
    } else {
      setMoreButtonActive(false);
    }
  }, [foundMovies.length, movieToView.length]);

  useEffect(() => {
    if (width > DESKTOP_VIEW) {
      setMovieToView(foundMovies.slice(0, MOVIECARD_16));
    }
    else if (MOBILE_VIEW < width && width < DESKTOP_VIEW) {
      setMovieToView(foundMovies.slice(0, MOVIECARD_8));
    } else if (width < MOBILE_VIEW) {
      setMovieToView(foundMovies.slice(0, MOVIECARD_5));
    }
  }, [width, foundMovies]);

  useEffect(() => {
    window.addEventListener("resize", timeout);
    return () => {
      window.removeEventListener("resize", timeout);
    }
  })

  function timeout() {
    setTimeout(() => { setWidth(window.innerWidth) }, 5)
  }

  async function handleSearch(searchQuery) {
    if (searchQuery && localStorage.getItem("initialMovies")) {
      setSearchQuery(searchQuery);
      localStorage.setItem("keyword", JSON.stringify(searchQuery));
      const beatFilms = JSON.parse(localStorage.getItem("initialMovies"));
      const filteredMovies = beatFilms.filter((movie) =>
        movie.nameRU.toLowerCase().includes(searchQuery.toLowerCase()) || movie.nameEN.toLowerCase().includes(searchQuery.toLowerCase())
      );
      localStorage.setItem("foundMovies", JSON.stringify(filteredMovies));

      if (filteredMovies.length !== 0) {
        setFoundMovies(filteredMovies);
        setError("");
      } else {
        setFoundMovies([]);
        setError("Ничего не найдено");
      }
      checkToggle(filteredMovies);
    } else if (searchQuery && !localStorage.getItem("initialMovies")) {
      setLoading(true);
      const data = await getMovies();
      localStorage.setItem("initialMovies", JSON.stringify(data));
      setFoundMovies(data);
      localStorage.setItem("keyword", JSON.stringify(searchQuery));
      const beatFilms = JSON.parse(localStorage.getItem("initialMovies"));
      const filteredMovies = beatFilms.filter((movie) =>
        movie.nameRU.toLowerCase().includes(searchQuery.toLowerCase()) || movie.nameEN.toLowerCase().includes(searchQuery.toLowerCase())
      );
      localStorage.setItem("foundMovies", JSON.stringify(filteredMovies));

      if (filteredMovies.length !== 0) {
        setFoundMovies(filteredMovies);
        setError("");
      } else {
        setFoundMovies([]);
        setError("Ничего не найдено");
      }
      checkToggle(filteredMovies);
    }

    if (searchQuery === "" || null) {
      setFoundMovies([]);
      setError("Нужно ввести ключевое слово");
    }
    setLoading(false);
  }

  function handleToggleClick() {
    setToggleOn(!isToggleOn);
    const filteredMovies = JSON.parse(localStorage.getItem("foundMovies"));

    if (filteredMovies) {
      checkToggle(filteredMovies);
    }
  }

  function checkToggle(filteredMovies) {
    if (isToggleOn === true) {
      localStorage.setItem("isToggle", true);
      const filteredMoviesShort = filteredMovies.filter((movie) => movie.duration <= SHORT_MOVIE);
      localStorage.setItem("foundMoviesShort", JSON.stringify(filteredMoviesShort));
      if (filteredMoviesShort.length !== 0 && isToggleOn) {
        setFoundMovies(JSON.parse(localStorage.getItem("foundMoviesShort")));
        setError("");
      } else {
        setFoundMovies([]);
        setError("Ничего не найдено");
      }
      return filteredMoviesShort;
    } else if (isToggleOn === false) {
      localStorage.setItem("isToggle", false);
      return;
    }
  }

  function moreMoviesClick() {
    if (movieToView.length < foundMovies.length && width > DESKTOP_VIEW) {
      setMovieToView(foundMovies.slice(0, movieToView.length + MOVIECARD_4));
    } else if (movieToView.length < foundMovies.length && MOBILE_VIEW < width && width < DESKTOP_VIEW) {
      setMovieToView(foundMovies.slice(0, movieToView.length + MOVIECARD_2));
    } else if (movieToView.length < foundMovies.length && width < MOBILE_VIEW) {
      setMovieToView(foundMovies.slice(0, movieToView.length + MOVIECARD_1));
    }
  }

  return (
    <div className="movies">
      <Header
        onSideMenu={onSideMenu}
        isLoggedIn={isLoggedIn}
      />
      <main className="content">
        <SearchForm
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
          handleSearch={handleSearch}
          isToggleOn={isToggleOn}
          handleToggleClick={handleToggleClick}
        />
        <MoviesCardList
          movies={movieToView}
          error={error}
          handleSave={handleSave}
          handleDelete={handleDelete}
        />
        <div className="more-movies-button">
          {isMoreButtonActive &&
            <button
              className="more-movies-button__title"
              type="button"
              onClick={moreMoviesClick}>
              Ещё
            </button>
          }
        </div>
      </main>
      <Footer />
    </div>
  )
}

export default Movies;