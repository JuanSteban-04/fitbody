import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

import Welcome from '../pages/WelcomePage';
import Dashboard from '../pages/Dashboard';
import EsperaValidacion from '../pages/EsperaValidacion';
import RegistroUsuario from '../pages/RegistroUsuario';
import RegistroEntrenador from '../pages/RegistroEntrenador';
import NotFound from '../pages/NotFound';

import useAuthUser from '../hooks/useAuthUser';
import LoginPage from '../pages/LoginPage';
import RegisterPage from '../pages/RegisterPage';

const AppRoutes = () => {
  const { userData } = useAuthUser();

  return (
    <Routes>
      {/* Rutas públicas */}
      <Route path="/" element={<Welcome />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/registro" element={<RegisterPage />} />
      <Route path="/espera-validacion" element={<EsperaValidacion />} />
      <Route path="/RegistroUsuario" element={<RegistroUsuario />} />
      <Route path="/RegistroEntrenador" element={<RegistroEntrenador />} />

      {/* Rutas protegidas para completar perfil */}
      {userData?.rol === 'cliente' && !userData.perfilCompleto && (
        <Route path="/completar-cliente" element={<RegistroUsuario />} />
      )}
      {userData?.rol === 'entrenador' && !userData.perfilCompleto && (
        <Route path="/completar-entrenador" element={<RegistroEntrenador />} />
      )}

      {/* Rutas protegidas generales */}
      {userData?.perfilCompleto && (
        <Route path="/dashboard" element={<Dashboard />} />
      )}

      {/* Ruta catch-all */}
      <Route
        path="*"
        element={
          userData ? (
            userData.rol === 'cliente' && !userData.perfilCompleto ? (
              <Navigate to="/completar-cliente" />
            ) : userData.rol === 'entrenador' && !userData.perfilCompleto ? (
              <Navigate to="/completar-entrenador" />
            ) : (
              <NotFound />
            )
          ) : (
            <NotFound />
          )
        }
      />
    </Routes>
  );
};

export default AppRoutes;
