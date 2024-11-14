import React from 'react';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Importa useNavigate
import './navbar.css';

const Navbar = () => {
  const navigate = useNavigate(); // Inicializa navigate para usar redirección
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const loggedInStatus = sessionStorage.getItem("isLoggedIn");
    setIsLoggedIn(loggedInStatus === "true");
  }, []);

  // Funciones de manejo de clic para redirección
  const handleLoginClick = () => {
    navigate('/login'); // Redirige a la ruta de inicio de sesión
  };

  const handleRegisterClick = () => {
    navigate('/register'); // Redirige a la ruta de registro
  };

  const handleLogoClick = () => {
    navigate('/home'); // Redirige a la ruta de registro
  };

  const handleLogOutClick = () => {
    sessionStorage.setItem("isLoggedIn", "false");
    location.reload();  
  };

  

  return (
    <nav className="navbar">
      <div className="navbar-content">
        
        <div className="logo-container">
          <img src="/src/assets/Img/Logo_nav.png" alt="nav-logo" className="logo-image" onClick={handleLogoClick} />
        </div>
        
        <ul className="link-container">
          {isLoggedIn ? (
              <>
              <li style={{ visibility: 'hidden' }}><button onClick={handleLoginClick} className="nav-button">Iniciar Sesión</button></li>
              <li style={{ visibility: 'hidden' }}><button onClick={handleRegisterClick} className="nav-button">Crear Cuenta</button></li>
              <li style={{ visibility: 'visible' }}><button onClick={handleLogOutClick} className="nav-button">Cerrar Sesion</button></li>
              </>
            ) : (
              <>
              <li style={{ visibility: 'visible' }}><button onClick={handleLoginClick} className="nav-button">Iniciar Sesión</button></li>
              <li style={{ visibility: 'visible' }}><button onClick={handleRegisterClick} className="nav-button">Crear Cuenta</button></li>
              <li style={{ visibility: 'hidden', display: 'none'}}><button onClick={handleLogOutClick} className="nav-button">Cerrar Sesion</button></li>
              </>
            )}
        </ul>
        
      </div>
    </nav>
  );
}

export default Navbar;
