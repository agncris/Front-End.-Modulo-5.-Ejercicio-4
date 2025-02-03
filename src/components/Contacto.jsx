import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/main.css';

function Contacto() {
  return (
    <div>
      <main className="container-fluid py-5">
        <section className="text-center mb-5">
          <h1 className="display-5 fw-bold">Contáctanos</h1>
          <p className="lead">Para dudas y felicitaciones contáctanos a:</p>
        </section>

        <section className="mb-5">
          <h2 className="h2 mb-4 text-center">Formulario de contacto</h2>
          <div className="container d-flex justify-content-center">
            <form className="row g-3">
              <div className="col-12 col-md-10">
                <label htmlFor="nombre" className="form-label">Nombre</label>
                <input type="text" id="nombre" name="nombre" className="form-control" placeholder="tu nombre" required />
              </div>
              <div className="col-12 col-md-10">
                <label className="form-label" htmlFor="email">Correo electrónico</label>
                <input type="email" id="email" name="email" className="form-control" placeholder="tu correo" required />
              </div>
              <div className="col-12 col-md-10">
                <label className="form-label" htmlFor="asunto">Asunto</label>
                <input type="text" id="asunto" name="asunto" className="form-control" placeholder="asunto" required />
              </div>
              <div className="col-12 col-md-10">
                <label className="form-label" htmlFor="mensaje">Mensaje</label>
                <textarea id="mensaje" name="mensaje" className="form-control" placeholder="mensaje" required></textarea>
              </div>
              <div className="col-12 text-end">
                <button type="submit" className="btn btn-primary">Enviar</button>
              </div>
            </form>
          </div>
          <h2 className="h3 mb-4">Dónde estamos</h2>
          <div className="ratio ratio-16x9">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d597200.5769442105!2d-69.89430604335637!3d-54.73889880896319!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xbc4d978e7d85c1b9%3A0x8974b819065f7e00!2sMonte%20Darwin!5e1!3m2!1ses!2scl!4v1731261252844!5m2!1ses!2scl"
              className="border rounded"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </section>
      </main>
    </div>
  );
}

export default Contacto;
