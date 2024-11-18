// eslint-disable-next-line react/prop-types
const Footer = ({ onLogoutClick, onGoBackHome }) => {
    return (
      <div className="sidebar-footer">
        <button onClick={onGoBackHome} className="footer-button">
          Home
        </button>
        <button onClick={onLogoutClick} className="footer-button">
          Cerrar Sesión
        </button>
      </div>
    );
  };
  
  export default Footer;