import { useParams } from 'react-router-dom';
import { celulares } from '../data/data';

const ProductoDetalle = () => {
  const { idCelular } = useParams();
  const celular = celulares.find(c => c.id === parseInt(idCelular));

  if (!celular) return <p>Producto no encontrado</p>;

  return (
    <section className="container">
      <div className="card" style={{ display: 'flex', gap: '30px', alignItems: 'center' }}>
        <div style={{ flex: 1 }}>
          <img src={celular.fotos[0]} alt={celular.nombre} style={{ maxHeight: '300px', objectFit: 'contain' }} />
        </div>
        <div style={{ flex: 2 }}>
          <h2>{celular.nombre}</h2>
          <p>{celular.descripcion}</p>
          <p><strong>Precio:</strong> ${celular.precio}</p>
          <button className="btn">Comprar ahora</button>
        </div>
      </div>
    </section>
  );
};

export default ProductoDetalle;