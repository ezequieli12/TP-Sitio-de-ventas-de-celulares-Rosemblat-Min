import { useState, useEffect } from 'react';
import { celulares } from '../data/data';
import { useParams } from 'react-router-dom';

const Productos = () => {
  const { idMarca } = useParams();
  const [filtrados, setFiltrados] = useState([]);

  useEffect(() => {
    if (idMarca) {
      const filtradosPorMarca = celulares.filter(c => c.marcaId === parseInt(idMarca));
      setFiltrados(filtradosPorMarca);
    } else {
      setFiltrados(celulares);
    }
  }, [idMarca]);

  return (
    <section className="container">
      <h2 style={{ marginBottom: '20px' }}>Nuestros Productos</h2>
      <div className="grid">
        {filtrados.map(celu => (
          <div key={celu.id} className="card">
            <img src={celu.fotos[0] || 'https://via.placeholder.com/300'} alt={celu.nombre} />
            <h3>{celu.nombre}</h3>
            <p>{celu.descripcion}</p>
            <p><strong>${celu.precio}</strong></p>
            <a href={`/producto/${celu.id}`} className="btn">Ver más</a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Productos;