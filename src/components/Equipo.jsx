import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/main.css';
import { useDoctors } from '../../context/DoctorContext';

function Equipo() {
  const { doctors, loading, error, fetchDoctors } = useDoctors();
  const [viewMode, setViewMode] = useState('cards'); // Estado para controlar el modo de visualización

  useEffect(() => {
    fetchDoctors();
  }, [fetchDoctors]);

  return (
    <React.Fragment>
      <main className="container-fluid" style={{ height: '100%' }}>
        <section className="container my-5">
          <h2 className="text-center mb-4">Conoce a nuestro staff especialista</h2>
          <p className="text-center">Contamos con especialistas a tu servicio</p>
        </section>

        <section className="container my-5">
          <div className="d-flex flex-wrap justify-content-center">
            <button className="button button--primary m-2" onClick={() => setViewMode('cards')}>Tarjetas</button>
            <button className="button button--primary m-2" onClick={() => setViewMode('table')}>Tabla</button>
            <button className="button button--primary m-2" onClick={fetchDoctors}>Recargar Doctores</button>
          </div>
          {loading && <p className="text-center">Cargando...</p>}
          {error && (
            <div className="text-center text-danger">
              <p>Error al cargar los datos: {error.message}</p>
              <button className="button button--primary m-2" onClick={fetchDoctors}>Intentar nuevamente</button>
            </div>
          )}
          {!loading && !error && viewMode === 'cards' && (
            <div className="cards-container">
              {doctors.map((doctor) => (
                <div key={doctor.nombre} className="doctor_card">
                  <img src={doctor.imagen} alt={doctor.nombre} />
                  <div>
                    <h2>{doctor.nombre}</h2>
                    <p>{doctor.especialidad}</p>
                    <p>{doctor.descripcion}</p>
                  </div>
                </div>
              ))}
            </div>
          )}
          {!loading && !error && viewMode === 'table' && (
            <table className="table table-responsive">
              <thead>
                <tr>
                  <th>Nombre</th>
                  <th>Especialidad</th>
                  <th>Descripción</th>
                </tr>
              </thead>
              <tbody>
                {doctors.map((doctor) => (
                  <tr key={doctor.nombre}>
                    <td>{doctor.nombre}</td>
                    <td>{doctor.especialidad}</td>
                    <td>{doctor.descripcion}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
          <div id="doctor-info"></div>
        </section>
      </main>
    </React.Fragment>
  );
}

export default Equipo;
