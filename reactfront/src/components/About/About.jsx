import React from 'react'
import Style from './About.module.css';

const About = () => {
  return (
    <div className={Style.About} id='about'>
      <div className={Style.Description}>
      <h1 className={Style.Title}>PUERTAS BLOCKLEMON</h1>
      <h3 className={Style.Subtitle}>Diseño y fabricacion de puertas</h3>
      <p className={Style.Text}>En BlockLemon somos especialistas en diseñar y fabricar puertas en Barcelona, tanto de interior como de exterior. Fabricamos todo tipos de puertas, es por ello que somos especialistas en el tratado de madera.
      Realizamos proyectos de puertas a medida, pudiendo elegir entre puertas de interior blancas o de madera, puertas de cocina, puertas de entrada y/o armarios.</p>
      <button className={Style.Button}>Más Info</button>
      </div>
      <div className={Style.Resumen}>
      <div className={Style.Card}>
        <h1>40+</h1>
      <h2>Experencia</h2>
      </div>
      <div className={Style.Card}>
        <h1>4000+</h1>
      <h2>Instalacio de puertas</h2>
      </div>
      <div className={Style.Card}>
        <h1>4+</h1>
      <h2>Valoracion Clientes</h2>
      </div>
      </div>
    </div>
  )
}

export default About