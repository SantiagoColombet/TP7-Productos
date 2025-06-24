import React from 'react';


const Footer = () => {
  return (
    <footer className="footer">
      <p>&copy; {new Date().getFullYear()} TuEmpresa. Todos los derechos reservados.</p>
      <div className="footer-links">
        <a href="/privacidad">Política de privacidad</a>
        <a href="/terminos">Términos de uso</a>
        <a href="/contacto">Contacto</a>
      </div>
    </footer>
  );
};

export default Footer;
