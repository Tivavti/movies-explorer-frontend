import React from "react";

function Techs() {
  return (
    <section className="techs" aria-label="Технологии." id="techs">
      <h2 className="techs__title title">Технологии</h2>
      <h3 className="techs__list-title">7 технологий</h3>
      <p className="techs__list-subtitle">На курсе веб-разработки мы освоили технологии, которые применили в дипломном проекте.</p>
      <ul className="techs__list">
        <li className="techs__element">HTML</li>
        <li className="techs__element">CSS</li>
        <li className="techs__element">JS</li>
        <li className="techs__element">React</li>
        <li className="techs__element">Git</li>
        <li className="techs__element">Express.js</li>
        <li className="techs__element">mongoDB</li>
      </ul>
    </section>
  )
}

export default Techs;