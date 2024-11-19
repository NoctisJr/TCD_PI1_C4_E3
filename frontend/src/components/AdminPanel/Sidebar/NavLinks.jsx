// eslint-disable-next-line react/prop-types
const NavLinks = ({onSectionChange}) => {
    return (
      <nav className="nav-links">
        <ul>
          <li onClick={() => onSectionChange('categories')}><a href="#categories">Categorias</a></li>
          <li onClick={() => onSectionChange('user')}><a href="#users">Usuarios</a></li>
          <li onClick={() => onSectionChange('tours')}><a href="#tours">Tours</a></li>
          <li><a href="#reservations">Reservas</a></li>
          <li><a href="#guides">Guias</a></li>
        </ul>
      </nav>
    );
  };
  
  export default NavLinks;