import React, { useState, useEffect } from "react";

import Header from "../Header/Header";
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import Footer from "../Footer/Footer";
import { SHORT_MOVIE } from "../../utils/constants";

function SavedMovies({ onSideMenu, isLoggedIn, handleDelete, isLoading }) {
  const [savedMovies, setSavedMovies] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [error, setError] = useState("");
  const [isToggleOn, setToggleOn] = useState(false);

  useEffect(() => {
    setSavedMovies(JSON.parse(localStorage.getItem("savedMovies")));
  }, [setSavedMovies])


  function handleSearch(searchQuery) {
    if (searchQuery) {
      setSearchQuery(searchQuery);
      const filteredMovies = savedMovies.filter((movie) =>
        movie.nameRU.toLowerCase().includes(searchQuery.toLowerCase()) || movie.nameEN.toLowerCase().includes(searchQuery.toLowerCase())
      );
      localStorage.setItem("foundMoviesSaved", JSON.stringify(filteredMovies));

      if (filteredMovies.length !== 0) {
        setSavedMovies(filteredMovies);
        setError("");
      } else {
        setError("Ничего не найдено");
      }
      checkToggle(filteredMovies);
    }
  }

  function handleToggleClick() {
    setToggleOn(!isToggleOn);
  }

  function checkToggle(filteredMovies) {
    if (isToggleOn === true) {
      localStorage.setItem("isToggle", true);
      const filteredMoviesShortSaved = filteredMovies.filter((movie) => movie.duration <= SHORT_MOVIE);
      localStorage.setItem("foundMoviesSavedShort", JSON.stringify(filteredMoviesShortSaved));
      if (filteredMoviesShortSaved.length !== 0 && isToggleOn) {
        setSavedMovies(JSON.parse(localStorage.getItem("foundMoviesSavedShort")));
        setError("");
      } else {
        setError("Ничего не найдено");
      }
      return filteredMoviesShortSaved;
    } else if (isToggleOn === false) {
      localStorage.setItem("isToggle", false);
      return;
    }
  }
  return (
    <div className="saved-movies">
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
          movies={savedMovies}
          error={error}
          handleDelete={handleDelete}
          isLoading={isLoading}
        />
      </main>
      <Footer />
    </div>
  )
}

export default SavedMovies;