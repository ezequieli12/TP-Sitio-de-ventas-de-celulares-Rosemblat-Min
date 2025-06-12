import { NavLink } from "react-router-dom";
import { marcas } from "../data/data";

const Navbar = () => {
  return (
    <nav>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/quienes-somos">Quienes Somos</NavLink>
      <div className="dropdown">
        <span>Productos</span>
        <div className="dropdown-content">
          <NavLink to="/productos">Ver todos</NavLink>
          {marcas.map((marca) => (
            <NavLink key={marca.id} to={`/productos/marca/${marca.id}`}>
              {marca.nombre}
            </NavLink>
          ))}
        </div>
      </div>
      <NavLink to="/contacto">Contacto</NavLink>
    </nav>
  );
};

export default Navbar;
