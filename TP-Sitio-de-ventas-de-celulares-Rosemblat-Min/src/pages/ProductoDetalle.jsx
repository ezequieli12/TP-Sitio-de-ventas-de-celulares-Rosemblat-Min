import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { celulares, marcas } from '../data/data';

const ProductoDetalle = () => {
  const { idCelular } = useParams();
  const [celular, setCelular] = useState(null);
  const [marca, setMarca] = useState(null);
  const [imagenActual, setImagenActual] = useState(0);

  useEffect(() => {
    const producto = celulares.find(c => c.id === parseInt(idCelular));
    setCelular(producto);
    
    if (producto) {
      const marcaProducto = marcas.find(m => m.id === producto.marcaId);
      setMarca(marcaProducto);
    }
  }, [idCelular]);

  if (!celular) return <div>Cargando...</div>;

  return (
    <div className="producto-detalle">
      <div className="producto-galeria">
        <div className="imagen-principal">
          <img 
            src={celular.fotos[imagenActual] || '/placeholder-phone.jpg'} 
            alt={celular.nombre}
            onError={(e) => {
              e.target.src = '/placeholder-phone.jpg';
            }}
          />
        </div>
        
        <div className="thumbnails">
          {celular.fotos.map((foto, index) => (
            <img
              key={index}
              src={foto || '/placeholder-phone.jpg'}
              alt={`Vista ${index + 1}`}
              className={imagenActual === index ? 'active' : ''}
              onClick={() => setImagenActual(index)}
              onError={(e) => {
                e.target.src = '/placeholder-phone.jpg';
              }}
            />
          ))}
        </div>
      </div>
      
      <div className="producto-info">
        <h1>{celular.nombre}</h1>
        {marca && <p className="marca">Marca: {marca.nombre}</p>}
        <p className="precio">${celular.precio}</p>
        <p className="descripcion">{celular.descripcion}</p>
        
        <button className="comprar-button">Comprar ahora</button>
      </div>
    </div>
  );
};

export default ProductoDetalle;