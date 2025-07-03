import { celulares } from '../data/data';
import CardCelular from '../components/CardCelular';

const Home = () => {
  const destacados = celulares.slice(0, 4); // Mostrar primeros 4 como destacados
  
  return (
    <div className="home-page">
      <section className="hero">
        <h1>Bienvenidos a nuestra tienda de celulares</h1>
        <p>Encuentra los mejores dispositivos al mejor precio</p>
      </section>
      
      <section className="destacados">
        <h2>Productos Destacados</h2>
        <div className="celulares-grid">
          {destacados.map(celular => (
            <CardCelular key={celular.id} celular={celular} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;