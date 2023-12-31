import React from "react";

import FilterCheckbox from "../FilterCheckbox/FilterCheckbox";

function SearchForm() {
  return (
    <section className="search-form" aria-label="Строка поиска.">
      <form className="search-form__container">
        <div className="search-form__icon"></div>
        <input className="search-form__input"
          required
          type="text"
          placeholder=" Фильм">
        </input>
        <button className="search-form__button" type="submit"></button>
        <FilterCheckbox />
      </form>
    </section>
  )
}

export default SearchForm;