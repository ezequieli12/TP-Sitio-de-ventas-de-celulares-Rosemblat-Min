const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3>Sobre Nosotros</h3>
          <p>La mejor tienda de celulares con las últimas tecnologías.</p>
        </div>
        
        <div className="footer-section">
          <h3>Contacto</h3>
          <p>Email: info@tiendacelulares.com</p>
          <p>Teléfono: +123 456 7890</p>
        </div>
        
        <div className="footer-section">
          <h3>Redes Sociales</h3>
          <div className="social-icons">
            <a href="#"><i className="fab fa-facebook"></i></a>
            <a href="#"><i className="fab fa-twitter"></i></a>
            <a href="#"><i className="fab fa-instagram"></i></a>
          </div>
        </div>
      </div>
      
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Tienda de Celulares. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
};

export default Footer;