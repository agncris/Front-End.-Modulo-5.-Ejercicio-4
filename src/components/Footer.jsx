import React from 'react';

function Footer() {
  return (
    <footer className="footer">
      <p>Hospital Sale Sano. Todos los derechos reservados. 2024</p>
      <nav className="footer__nav">
        <ul className="footer__list">
          <li><a href="index.html" className="footer__link">Inicio</a></li>
          <li><a href="equipo.html" className="footer__link">Equipo</a></li>
          <li><a href="contacto.html" className="footer__link">Contacto</a></li>
          <li><a href="reservar.html" className="footer__link">Reservar una hora</a></li>
        </ul>
      </nav>
      <p className="footer__contacto">Contacto: +569999888777 | Correo: salesano@gmail.com</p><br />
      <p className="footer__contacto">Síguenos en nuestras redes sociales</p><br />
      <div className="footer__social">
        <a href="https://www.instagram.com/salesano" target="_blank" rel="noopener noreferrer">
          <img src="https://logodownload.org/wp-content/uploads/2017/04/instagram-logo.png" alt="instagram" width="30" height="30" />
        </a>
        <a href="https://www.linkedin.com/salesano" target="_blank" rel="noopener noreferrer">
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/LinkedIn_logo_initials.png" alt="linkedin" width="30" height="30" />
        </a>
      </div>
    </footer>
  );
}

export default Footer;
