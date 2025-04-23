// src/pages/EsperaValidacion.jsx
import React from 'react';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import logo from '../assets/logo-fitbody.png';

const EsperaValidacion = () => {
  const navigate = useNavigate();

  // En EsperaValidacion.jsx
useEffect(() => {
  const timeout = setTimeout(() => {
    const tempUser = JSON.parse(localStorage.getItem('registroTemp'));
    const rol = localStorage.getItem('rol');

    // Simulamos que el admin aprobó al usuario
    localStorage.setItem('userData', JSON.stringify({ ...tempUser, rol, perfilCompleto: false }));
    window.location.href = '/RegistroEntrenador'; // o entrenador según el rol
  }, 4000);

  return () => clearTimeout(timeout);
}, []);

  
  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-center p-6">
      <h1 className="text-2xl font-semibold text-orange-600 mb-4">¡Estamos validando tu registro!</h1>
      <p className="text-gray-700">Espera un momento mientras redirigimos tu cuenta...</p>
    </div>
  );
};

export default EsperaValidacion;
