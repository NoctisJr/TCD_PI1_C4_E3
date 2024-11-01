import React from 'react';
import './navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-content">
        
        <div className="logo-container">
          <img src="/src/assets/Img/Logo_nav.png" alt="nav-logo" className="logo-image" />
        </div>
        
        <ul className="link-container">
          <li><a href="">Iniciar Sesión</a></li>
          <li><a href="">Crear Cuenta</a></li>
        </ul>
        
      </div>
    </nav>
  );
}

export default Navbar;