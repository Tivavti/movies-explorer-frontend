import React from "react";

function NavTab() {
  return (
    <section className="nav-tab" aria-label="Навигация.">
      <ul className="nav-tab__list">
        <li className="nav-tab__item">
          <a href="#about-poject" className="nav-tab__item-link">О проекте</a>
        </li>
        <li className="nav-tab__item">
          <a href="#techs" className="nav-tab__item-link">Технологии</a>
        </li>
        <li className="nav-tab__item">
          <a href="#about-me" className="nav-tab__item-link">Студент</a>
        </li>
      </ul>
    </section>
  )
}

export default NavTab;