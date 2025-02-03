import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/main.css';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import React, { useEffect, useState, useCallback } from 'react';

// Importar DoctorProvider
import { DoctorProvider } from '../context/DoctorContext'; 

// Componentes
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import Equipo from './components/equipo';
import Contacto from './components/Contacto';
import Reservar from './components/Reservar';

const App = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchData = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch('http://localhost:3001/medical-services');
      if (!response.ok) {
        throw new Error('Respuesta de red incorrecta');
      }
      const result = await response.json();
      setData(result);
    } catch (error) {
      console.error('Error fetching data:', error);
      setError(error);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return (
      <div>
        <div>Error: {error.message}</div>
        <button className="button button--primary" onClick={fetchData}>Intentar nuevamente</button>
      </div>
    );
  }

  return (
    <DoctorProvider> {/* Proveer estado de doctores */}
      <Router>
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/equipo" element={<Equipo />} />
            <Route path="/contacto" element={<Contacto />} />
            <Route path="/reservar" element={<Reservar />} />
          </Routes>
          <div>
            <h1>Medical Services</h1>
            <ul>
              {data.map((service) => (
                <li key={service.id}>{service.name}</li>
              ))}
            </ul>
          </div>
        </main>
        <Footer />
      </Router>
    </DoctorProvider>
  );
};

export default App;
