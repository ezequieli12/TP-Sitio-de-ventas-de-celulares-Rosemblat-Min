import { Link } from "react-router-dom";

const CardCelular = ({ celular }) => {
  return (
    <div className="card">
      <img src={celular.fotos[0]} alt={celular.nombre} />
      <h3>{celular.nombre}</h3>
      <p>{celular.descripcion}</p>
      <p><strong>${celular.precio}</strong></p>
      <Link to={`/productos/detalle/${celular.id}`}>Ver detalle</Link>
    </div>
  );
};

export default CardCelular;
