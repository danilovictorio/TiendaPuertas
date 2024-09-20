import React from 'react'
import Style from './About.module.css';

const About = () => {
  return (
    <div className={Style.About}>
      <div className={Style.Description}>
      <h1 className={Style.Title}>Puertas BlockLemon</h1>
      <h3 className={Style.Subtitle}>Diseño y fabricacion de puertas</h3>
      <p className={Style.Text}>En BlockLemon somos especialistas en diseñar y fabricar puertas en Barcelona, tanto de interior como de exterior. Fabricamos todo tipos de puertas, es por ello que somos especialistas en el tratado de madera.
      Realizamos proyectos de puertas a medida, pudiendo elegir entre puertas de interior blancas o de madera, puertas de cocina, puertas de entrada y/o armarios.</p>
      <button>Más Info</button>
      </div>
      <div className={Style.Resumen}>
      
      </div>


    </div>
  )
}

export default About