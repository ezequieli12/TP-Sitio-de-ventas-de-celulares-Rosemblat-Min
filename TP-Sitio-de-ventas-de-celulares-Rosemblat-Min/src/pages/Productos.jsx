import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { marcas, celulares } from '../data/data';
import CardCelular from '../components/CardCelular';

const Productos = () => {
  const { idMarca } = useParams();
  const [productosFiltrados, setProductosFiltrados] = useState([]);
  const [marcaSeleccionada, setMarcaSeleccionada] = useState(null);

  useEffect(() => {
    if (idMarca) {
      const marca = marcas.find(m => m.id === parseInt(idMarca));
      setMarcaSeleccionada(marca);
      const filtrados = celulares.filter(c => c.marcaId === parseInt(idMarca));
      setProductosFiltrados(filtrados);
    } else {
      setMarcaSeleccionada(null);
      setProductosFiltrados(celulares);
    }
  }, [idMarca]);

  return (
    <div className="productos-page">
      <h1>
        {marcaSeleccionada 
          ? `Productos de ${marcaSeleccionada.nombre}` 
          : 'Todos nuestros productos'}
      </h1>
      
      <div className="celulares-grid">
        {productosFiltrados.map(celular => (
          <CardCelular key={celular.id} celular={celular} />
        ))}
      </div>
    </div>
  );
};

export default Productos;