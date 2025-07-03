import { Link } from 'react-router-dom';

const CardCelular = ({ celular }) => {
  const handleImageError = (e) => {
    e.target.src = '/placeholder-phone.jpg'; // Asegúrate de tener esta imagen en tu carpeta public
    e.target.onerror = null; // Prevenir bucles
  };

  return (
    <div className="card-celular">
      <div className="card-image">
        <img 
          src={celular.fotos[0]} 
          alt={celular.nombre}
          onError={handleImageError}
        />
      </div>
      
      <div className="card-content">
        <h3>{celular.nombre}</h3>
        <p className="card-price">${celular.precio}</p>
        <p className="card-desc">{celular.descripcion.substring(0, 60)}...</p>
        
        <Link to={`/producto/${celular.id}`} className="card-button">
          Ver Detalles
        </Link>
      </div>
    </div>
  );
};

export default CardCelular;