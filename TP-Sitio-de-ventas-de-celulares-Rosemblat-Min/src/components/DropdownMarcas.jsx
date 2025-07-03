import { Link } from 'react-router-dom';

const DropdownMarcas = ({ marcas }) => {
  return (
    <div className="dropdown">
      <button className="dropdown-button">
        Productos
      </button>
      
      <div className="dropdown-content">
        <Link to="/productos" className="dropdown-item">Ver todos</Link>
        {marcas.map(marca => (
          <Link 
            key={marca.id} 
            to={`/productos/marca/${marca.id}`}
            className="dropdown-item"
          >
            {marca.nombre}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default DropdownMarcas;