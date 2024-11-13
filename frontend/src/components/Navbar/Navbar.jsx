import React from 'react';
import { useNavigate } from 'react-router-dom'; // Importa useNavigate
import './navbar.css';

const Navbar = () => {
  const navigate = useNavigate(); // Inicializa navigate para usar redirección

  // Funciones de manejo de clic para redirección
  const handleLoginClick = () => {
    navigate('/login'); // Redirige a la ruta de inicio de sesión
  };

  const handleRegisterClick = () => {
    navigate('/register'); // Redirige a la ruta de registro
  };

  return (
    <nav className="navbar">
      <div className="navbar-content">
        
        <div className="logo-container">
          <img src="/src/assets/Img/Logo_nav.png" alt="nav-logo" className="logo-image" />
        </div>
        
        <ul className="link-container">
          <li><button onClick={handleLoginClick} className="nav-button">Iniciar Sesión</button></li>
          <li><button onClick={handleRegisterClick} className="nav-button">Crear Cuenta</button></li>
        </ul>
        
      </div>
    </nav>
  );
}

export default Navbar;
