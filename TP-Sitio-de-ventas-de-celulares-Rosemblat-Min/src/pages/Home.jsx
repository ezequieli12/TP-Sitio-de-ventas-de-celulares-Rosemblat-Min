const Home = () => {
    return (
      <section className="hero">
        <div className="container">
          <h2>iPhone 16 Pro</h2>
          <p>Diseñado para Apple Intelligence.</p>
          <a href="/productos/1" className="btn">Comprar</a>
        </div>
  
        <div className="hero" style={{ backgroundColor: '#fff', color: '#000' }}>
          <div className="container">
            <h2>Motorola Razr</h2>
            <p>Promo Mundial del 1 al 15 de julio</p>
            <a href="/productos/4" className="btn">Ver Promo</a>
          </div>
        </div>
  
        <div className="hero" style={{ background: '#E6F0FF', color: '#000' }}>
          <div className="container">
            <h2>Galaxy Unpacked</h2>
            <p>Jul. 09, 2025 a las 11:00 AM</p>
            <a href="/productos/2" className="btn">Registrate</a>
          </div>
        </div>
      </section>
    );
  };
  
  export default Home;