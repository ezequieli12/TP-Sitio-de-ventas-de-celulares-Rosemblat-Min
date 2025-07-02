const Footer = () => {
  return (
    <footer style={{ backgroundColor: '#000', color: 'white', padding: '40px 20px 20px', marginTop: 'auto' }}>
      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'flex-start', maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{ flex: '1 1 200px', marginBottom: '20px' }}>
          <h2 style={{ marginBottom: '16px' }}>CelularesShop</h2>
          <div style={{ display: 'flex', gap: '12px' }}>
            <a href="#" target="_blank" rel="noopener noreferrer">
              <img src="https://cdn-icons-png.flaticon.com/512/733/733547.png" alt="Facebook" width="24" />
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer">
              <img src="https://cdn-icons-png.flaticon.com/512/733/733579.png" alt="Twitter" width="24" />
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer">
              <img src="https://cdn-icons-png.flaticon.com/512/2111/2111463.png" alt="Instagram" width="24" />
            </a>
          </div>
        </div>

        <div style={{ display: 'flex', flex: '3 1 600px', justifyContent: 'space-around', flexWrap: 'wrap' }}>
          <ul style={{ listStyle: 'none', padding: 0 }}>
            <li><a href="#" style={{ color: 'white', textDecoration: 'none' }}>Términos y Condiciones</a></li>
            <li><a href="#" style={{ color: 'white', textDecoration: 'none' }}>Política de Privacidad</a></li>
            <li><a href="#" style={{ color: 'white', textDecoration: 'none' }}>Ayuda</a></li>
          </ul>
        </div>
      </div>
      <p style={{ textAlign: 'center', marginTop: '30px', fontSize: '14px' }}>
        © {new Date().getFullYear()} CelularesShop. Todos los derechos reservados.
      </p>
    </footer>
  );
};

export default Footer;