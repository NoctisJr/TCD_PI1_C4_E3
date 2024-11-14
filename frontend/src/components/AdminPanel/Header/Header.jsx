import './Header.css';

const Header = ({ title, onSearch }) => {
  return (
    <div className="header">
      <h1>{title}</h1>
      <input 
        type="text" 
        placeholder="Search by name, unit, status..." 
        onChange={(e) => onSearch(e.target.value)} 
        className="search-bar"
      />
    </div>
  );
};

export default Header;