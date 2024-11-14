import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './navbar.css';

const Navbar = () => {
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false); 

  useEffect(() => {
    const loggedInStatus = sessionStorage.getItem("isLoggedIn");
    const adminStatus = sessionStorage.getItem("isAdmin");

    setIsLoggedIn(loggedInStatus === "true");
    setIsAdmin(adminStatus === "true"); 
  }, []);

  const handleLoginClick = () => navigate('/login');
  const handleRegisterClick = () => navigate('/register');
  const handleLogoClick = () => navigate('/home');
  const handleDashboardClick = () => navigate('/admin');

  const handleLogOutClick = () => {
    sessionStorage.setItem("isLoggedIn", "false");
    sessionStorage.removeItem("isAdmin");
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
              <li style={{ display: 'none' }}><button onClick={handleLoginClick} className="nav-button">Iniciar Sesión</button></li>
              <li style={{ display: 'none' }}><button onClick={handleRegisterClick} className="nav-button">Crear Cuenta</button></li>
              <li><button onClick={handleLogOutClick} className="nav-button">Cerrar Sesion</button></li>
              {isAdmin && (
                <li><button onClick={handleDashboardClick} className="nav-button">Dashboard</button></li>
              )}
            </>
          ) : (
            <>
              <li><button onClick={handleLoginClick} className="nav-button">Iniciar Sesión</button></li>
              <li><button onClick={handleRegisterClick} className="nav-button">Crear Cuenta</button></li>
              <li style={{ display: 'none' }}><button onClick={handleLogOutClick} className="nav-button">Cerrar Sesion</button></li>
            </>
          )}
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
