import React from "react";

function AboutProject() {
  return (
    <section className="about-project" aria-label="О проекте." id="about-poject">
      <h2 className="about-project__title title">О проекте</h2>
      <ul className="about-project__list">
        <li className="about-project__element">
          <h3 className="about-project__element-title">Дипломный проект включал 5 этапов</h3>
          <p className="about-project__element-subtitle">Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные доработки.</p>
        </li>
        <li className="about-project__element">
          <h3 className="about-project__element-title">На выполнение диплома ушло 5 недель</h3>
          <p className="about-project__element-subtitle">У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.</p></li>
      </ul>
      <ul className="about-project__timeline">
        <li>
          <h3 className="about-project__timeline-title about-project__timeline-title_size_small">1 неделя</h3>
          <p className="about-project__timeline-subtitle">Back-end</p>
        </li>
        <li>
          <h3 className="about-project__timeline-title about-project__timeline-title_size_big">4 недели</h3>
          <p className="about-project__timeline-subtitle">Front-end</p>
        </li>
      </ul>
    </section>
  )
}

export default AboutProject;