import React from "react";

function FilterCheckbox({ isToggleOn, checkToggle, handleToggleClick }) {
  return (
    <div className="filter-checkbox">
      <label className="filter-checkbox__toggle">
        <input
          className="filter-checkbox__toggle-checkbox"
          type="checkbox"
          defaultChecked={isToggleOn}
          onChange={handleToggleClick}
        />
        <span className="filter-checkbox__toggle-switch"></span>
      </label>
      <span className="filter-checkbox__toggle-title">Короткометражки</span>
    </div >
  )
}

export default FilterCheckbox;