import { useParams } from "react-router-dom";
import { celulares } from "../data/data";
import CardCelular from "../components/CardCelular";

const Productos = () => {
  const { idMarca } = useParams();
  const lista = idMarca ? celulares.filter(c => c.marcaId === Number(idMarca)) : celulares;

  return (
    <section>
      <h2>Productos</h2>
      <div className="grid">
        {lista.map((celular) => (
          <CardCelular key={celular.id} celular={celular} />
        ))}
      </div>
    </section>
  );
};

export default Productos;
