import React from "react";

function FilterCheckbox() {
  return (
    <div className="filter-checkbox">
      <label className="filter-checkbox__toggle">
        <input className="filter-checkbox__toggle-checkbox" type="checkbox" />
        <span className="filter-checkbox__toggle-switch"></span>
      </label>
      <span className="filter-checkbox__toggle-title">Короткометражки</span>
    </div >
  )
}

export default FilterCheckbox;