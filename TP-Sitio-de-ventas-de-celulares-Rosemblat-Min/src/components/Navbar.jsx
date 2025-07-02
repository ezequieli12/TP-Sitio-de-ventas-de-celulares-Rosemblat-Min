import { Link } from 'react-router-dom';
import { marcas } from '../data/data';

const Navbar = () => {
  return (
    <header>
      <h1>CelularesShop</h1>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/quienes-somos">Quienes Somos</Link></li>
          <li className="dropdown">
            <span>Productos</span>
            <div className="dropdown-content">
              <Link to="/productos">Ver todos</Link>
              {marcas.map((marca) => (
                <Link key={marca.id} to={`/productos/${marca.id}`}>{marca.nombre}</Link>
              ))}
            </div>
          </li>
          <li><Link to="/contacto">Contacto</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;

