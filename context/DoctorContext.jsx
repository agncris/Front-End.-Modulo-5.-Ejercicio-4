import React, { createContext, useContext, useState, useEffect, useCallback } from "react";

// Crear el contexto
const DoctorContext = createContext();

// Proveedor del contexto
export const DoctorProvider = ({ children }) => {
  const [doctors, setDoctors] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchDoctors = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch("http://localhost:3001/doctors");
      if (!response.ok) {
        throw new Error('Respuesta de red incorrecta');
      }
      const data = await response.json();
      setDoctors(data);
    } catch (error) {
      console.error("Error fetching doctors:", error);
      setError(error);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchDoctors();
  }, [fetchDoctors]);

  return (
    <DoctorContext.Provider value={{ doctors, setDoctors, loading, error, fetchDoctors }}>
      {children}
    </DoctorContext.Provider>
  );
};

// Hook para usar el contexto fácilmente
export const useDoctors = () => useContext(DoctorContext);
