import React from 'react';
import PropTypes from 'prop-types';

// Componente para listar los servicios médicos disponibles.
const ServiceList = ({ services }) => {
  return (
    <ul className="service-list">
      {services.map((service) => (
        <li key={service.id}>{service.name}</li>
      ))}
    </ul>
  );
};

ServiceList.propTypes = {
  services: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default ServiceList;