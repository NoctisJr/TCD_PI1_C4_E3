import LogoHeader from "./LogoHeader";
import NavLinks from "./NavLinks";
import UserProfile from "./UserProfile";
import Footer from "./Footer";
import "./Sidebar.css";
import { useNavigate } from 'react-router-dom';


const Sidebar = () => {
  const navigate = useNavigate(); 

  const handleLogoutClick = () => {
    
    //sessionStorage.removeItem("isLoggedIn");
    //sessionStorage.removeItem("isAdmin");

    
    navigate('/home');
  };

  return (
    <aside className="sidebar">
      <LogoHeader />
      <UserProfile name="Andres" email="andres@gmail.com" />
      <NavLinks />
      <Footer onLogoutClick={handleLogoutClick} /> 
    </aside>
  );
};

export default Sidebar;
