import FilterCheckbox from "../FilterCheckbox/FilterCheckbox";

function SearchForm({searchQuery, setSearchQuery, handleSearch, isToggleOn, handleToggleClick}) {
  function handleChange(evt) {
    setSearchQuery(evt.target.value);
  };

  function handleSubmit(evt) {
    evt.preventDefault();

    handleSearch(searchQuery);
    console.log("click")
  }

  return (
    <section className="search-form" aria-label="Строка поиска.">
      <form
        className="search-form__container"
        onSubmit={handleSubmit}
        noValidate >
        <div className="search-form__icon"></div>
        <input
          className="search-form__input"
          required
          name="search"
          type="text"
          placeholder=" Фильм"
          value={searchQuery || ""}
          onChange={handleChange}>
        </input>
        <button
          className="search-form__button"
          type="submit">
        </button>
        <FilterCheckbox
          isToggleOn={isToggleOn}
          handleToggleClick={handleToggleClick}
        />
      </form>
    </section>
  )
}

export default SearchForm;