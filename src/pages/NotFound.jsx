import React from 'react';
import { useNavigate } from 'react-router-dom';

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-black text-white px-4 text-center">
      <h1 className="text-5xl font-bold text-orange-500 mb-4">404</h1>
      <h2 className="text-2xl font-semibold mb-2">Página no encontrada</h2>
      <p className="text-gray-400 mb-6">
        La página que estás buscando no existe o fue movida.
      </p>
      <button
        onClick={() => navigate('/')}
        className="bg-orange-500 hover:bg-orange-600 text-white font-semibold py-2 px-6 rounded-xl transition duration-300"
      >
        Volver al inicio
      </button>
    </div>
  );
};

export default NotFound;
