import LogoHeader from "./LogoHeader";
import NavLinks from "./NavLinks";
import UserProfile from "./UserProfile";
import Footer from "./Footer";
import "./Sidebar.css";

const Sidebar = () => {

      const handleLogoutClick = () => {
        // Logic to log the user out
        alert('Logging out');
      };

    return (
      <aside className="sidebar">
        <LogoHeader />
        <UserProfile name="Manuel" email="manuel@gmail.com" />
        <NavLinks />
        <Footer onLogoutClick={handleLogoutClick} />
      </aside>
    );
  };

export default Sidebar