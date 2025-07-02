const Contacto = () => {
  return (
    <section className="container">
      <h2>Contacto</h2>
      <form style={{ display: 'flex', flexDirection: 'column', gap: '16px', maxWidth: '500px' }}>
        <input type="text" placeholder="Nombre" required />
        <input type="email" placeholder="Correo electrónico" required />
        <textarea placeholder="Mensaje" rows="5" required></textarea>
        <button className="btn" type="submit">Enviar</button>
      </form>
    </section>
  );
};

export default Contacto;
