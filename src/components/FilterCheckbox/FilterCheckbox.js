import React from "react";

function FilterCheckbox() {
  return (
    <section className="filter-checkbox" aria-label="Переключатель.">
      <label className="filter-checkbox__toggle">
        <input className="filter-checkbox__toggle-checkbox" type="checkbox" />
        <div className="filter-checkbox__toggle-switch"></div>
      </label>
      <span className="filter-checkbox__toggle-title">Короткометражки</span>

    </section >
  )
}

export default FilterCheckbox;