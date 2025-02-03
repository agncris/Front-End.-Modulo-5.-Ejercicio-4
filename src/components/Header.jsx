import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header className="container-fluid py-3 bg-primary text-white">
      <div className="row align-items-center">
        <div className="col-6 col-lg-2">
          <Link to="/" className="header__logo">
            <img src="https://clarkebenefits.com/wp-content/uploads/2018/07/hospital-icon.png" alt="Logo del Hospital" width="50" height="50" />
          </Link>
        </div>
        <div className="col-12 col-lg-8">
          <ul className="nav justify-content-center">
            <React.Fragment>
              <li className="nav-item"><Link to="/" className="nav-link text-white">Inicio</Link></li>
              <li className="nav-item"><Link to="/equipo" className="nav-link text-white">Equipo</Link></li>
              <li className="nav-item"><Link to="/contacto" className="nav-link text-white">Contacto</Link></li>
            </React.Fragment>
          </ul>
        </div>
        <div className="col-6 col-lg-2 text-end">
          <Link to="/reservar" className="btn btn-secondary">Reservar una hora</Link>
        </div>
      </div>
    </header>
  );
}

export default Header;
