import React, { useState, useEffect } from 'react';
import DoctorCard from './DoctorCard';
import ServiceList from './ServiceList';

const MedicosList = () => {
  const [medicos, setMedicos] = useState([]);
  const [services, setServices] = useState([]);
  const [filtroExperiencia, setFiltroExperiencia] = useState('');
  const [filtroEspecialidad, setFiltroEspecialidad] = useState('');

  useEffect(() => {
    const fetchMedicos = async () => {
      try {
        const response = await fetch('http://localhost:3001/doctors');
        if (!response.ok) {
          throw new Error('Respuesta de red incorrecta');
        }
        const medicosData = await response.json();
        setMedicos(medicosData);
      } catch (error) {
        console.error('Error fetching doctors:', error);
      }
    };

    const fetchServices = async () => {
      try {
        const response = await fetch('http://localhost:3001/medical-services');
        if (!response.ok) {
          throw new Error('Respuesta de red incorrecta');
        }
        const servicesData = await response.json();
        setServices(servicesData);
      } catch (error) {
        console.error('Error fetching services:', error);
      }
    };

    fetchMedicos();
    fetchServices();
  }, []);

  const handleFiltroExperienciaChange = (e) => {
    setFiltroExperiencia(e.target.value);
  };

  const handleFiltroEspecialidadChange = (e) => {
    setFiltroEspecialidad(e.target.value);
  };

  const filteredMedicos = medicos.filter((medico) => {
    return (
      (filtroExperiencia === '' || medico.experiencia >= parseInt(filtroExperiencia)) &&
      (filtroEspecialidad === '' || medico.especialidad === filtroEspecialidad)
    );
  });

  return (
    <React.Fragment>
      <div className="row mb-4">
        <div className="col-12 col-md-6 col-lg-3">
          <label htmlFor="filtroExperiencia" className="form-label">Años de experiencia</label>
          <select id="filtroExperiencia" className="form-select" value={filtroExperiencia} onChange={handleFiltroExperienciaChange}>
            <option value="">Todos...</option>
            <option value="5">Más de 5 años</option>
            <option value="10">Más de 10 años</option>
          </select>
        </div>
        <div className="col-12 col-md-6 col-lg-3">
          <label htmlFor="filtroEspecialidad" className="form-label">Especialidad</label>
          <select id="filtroEspecialidad" className="form-select" value={filtroEspecialidad} onChange={handleFiltroEspecialidadChange}>
            <option value="">Todos...</option>
            <option value="Pediatra">Pediatra</option>
            <option value="Psiquiatra">Psiquiatra</option>
            <option value="Oftalmólogo">Oftalmólogo</option>
          </select>
        </div>
      </div>
      <div className="row">
        {filteredMedicos.map((medico) => (
          <React.Fragment key={medico.contacto.email}>
            <div className="col-12 col-md-6 col-lg-4 mb-4">
              <DoctorCard doctor={medico} />
            </div>
          </React.Fragment>
        ))}
      </div>
      <ServiceList services={services} />
    </React.Fragment>
  );
};

export default MedicosList;