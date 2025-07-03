import { Link } from 'react-router-dom';
import { marcas } from '../data/data';
import DropdownMarcas from './DropdownMarcas';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">
          TiendaCelulares
        </Link>
        
        <div className="navbar-menu">
          <Link to="/" className="navbar-link">Home</Link>
          <Link to="/quienes-somos" className="navbar-link">Quiénes Somos</Link>
          
          <DropdownMarcas marcas={marcas} />
          
          <Link to="/contacto" className="navbar-link">Contacto</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;