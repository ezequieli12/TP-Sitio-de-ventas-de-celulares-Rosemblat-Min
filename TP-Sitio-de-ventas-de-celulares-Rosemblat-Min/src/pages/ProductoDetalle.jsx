import { useParams } from "react-router-dom";
import { celulares } from "../data/data";

const ProductoDetalle = () => {
  const { idCelular } = useParams();
  const producto = celulares.find(c => c.id === Number(idCelular));

  if (!producto) return <p>Producto no encontrado</p>;

  return (
    <section>
      <h2>{producto.nombre}</h2>
      <p>{producto.descripcion}</p>
      <p><strong>${producto.precio}</strong></p>
      <div className="galeria">
        {producto.fotos.map((src, i) => (
          <img key={i} src={src} alt={`Foto ${i + 1}`} />
        ))}
      </div>
    </section>
  );
};

export default ProductoDetalle;
