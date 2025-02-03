import React, { useState, useRef, useEffect } from 'react';
import PropTypes from 'prop-types';

const AppointmentForm = ({ doctors, onSubmit }) => {
  const [patientName, setPatientName] = useState('');
  const [selectedDoctor, setSelectedDoctor] = useState('');
  const [date, setDate] = useState('');
  const [selectedService, setSelectedService] = useState('');

  const patientNameRef = useRef(null);

  useEffect(() => {
    if (patientNameRef.current) {
      patientNameRef.current.focus();
    }
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (patientName && selectedDoctor && date && selectedService) {
      onSubmit({ name: patientName, doctor: selectedDoctor, date, service: selectedService });
    } else {
      alert('Por favor, complete todos los campos.');
    }
  };

  return (
    <form className="appointment-form" onSubmit={handleSubmit}>
      <React.Fragment>
        <div className="mb-3">
          <label className="form-label">Nombre del Paciente:</label>
          <input 
            type="text" 
            className="form-control"
            value={patientName} 
            onChange={(e) => setPatientName(e.target.value)} 
            ref={patientNameRef} 
            required 
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Seleccionar Doctor:</label>
          <select 
            className="form-select"
            value={selectedDoctor} 
            onChange={(e) => setSelectedDoctor(e.target.value)} 
            required
          >
            <option value="">Seleccione un doctor</option>
            {doctors.map((doctor, index) => (
              <option key={index} value={doctor.nombre}>{doctor.nombre}</option>
            ))}
          </select>
        </div>
        <div className="mb-3">
          <label className="form-label">Seleccionar Servicio:</label>
          <select 
            className="form-select"
            value={selectedService} 
            onChange={(e) => setSelectedService(e.target.value)} 
            required
          >
            <option value="">Seleccione un servicio</option>
            <option value="Consulta">Consulta</option>
            <option value="Urgencia">Urgencia</option>
            <option value="Especialidad">Especialidad</option>
          </select>
        </div>
        <div className="mb-3">
          <label className="form-label">Fecha:</label>
          <input 
            type="date" 
            className="form-control"
            value={date} 
            onChange={(e) => setDate(e.target.value)} 
            required 
          />
        </div>
        <button type="submit" className="btn btn-primary">Agendar Cita</button>
      </React.Fragment>
    </form>
  );
};

AppointmentForm.propTypes = {
  doctors: PropTypes.arrayOf(
    PropTypes.shape({
      nombre: PropTypes.string.isRequired,
    })
  ).isRequired,
  onSubmit: PropTypes.func.isRequired,
};

export default AppointmentForm;