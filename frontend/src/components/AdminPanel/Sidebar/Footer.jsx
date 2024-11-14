// eslint-disable-next-line react/prop-types
const Footer = ({ onLogoutClick }) => {
    return (
      <div className="sidebar-footer">
        <button onClick={onLogoutClick} className="footer-button">
          Home
        </button>
      </div>
    );
  };
  
  export default Footer;