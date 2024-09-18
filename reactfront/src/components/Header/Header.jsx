import React from 'react';
import styles from './Header.module.css'; // Importa el CSS Module

function Header() {
  return (
    <div className={styles.header}>
      <div className={styles.logo}>
        <img className={styles.image} src="/LogoVentana.png" alt="" />
        <h1>BLOCKLEMON</h1>
      </div>
      <nav>
        <ul>
          <li><a href="#about">Info</a></li>
          <li><a href="#services">Servicios</a></li>
          <li><a href="#doors-gallery">Exposición de Puertas</a></li>
          <li><a href="#contact">Contacto</a></li>
        </ul>
      </nav>
    </div>
  );
}

export default Header;
