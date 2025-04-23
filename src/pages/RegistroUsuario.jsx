import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const RegistroUsuario = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    username: '',
    nombre: '',
    apellidos: '',
    email: '',
    telefono: '',
    pais: '',
    foto: '',
    cedula: '',
    fechaNacimiento: '',
    edad: '',
    genero: '',
    peso: '',
    altura: '',
    actividad: '',
  });

  useEffect(() => {
    const datosPrevios = JSON.parse(localStorage.getItem('registroTemp'));
    if (datosPrevios) {
      setFormData(prev => ({ ...prev, ...datosPrevios }));
    }
  }, []);

  const handleChange = e => {
    const { name, value, files } = e.target;
    const val = name === 'foto' ? URL.createObjectURL(files[0]) : value;
    setFormData(prev => ({ ...prev, [name]: val }));
  };

  const handleSubmit = e => {
    e.preventDefault();
    console.log('Datos completos del cliente:', formData);
    localStorage.setItem('usuarioCompleto', JSON.stringify(formData));
    navigate('/dashboard');
  };

  return (
    <div className="p-6 max-w-3xl mx-auto">
      <h2 className="text-2xl font-semibold mb-4">Completa tu perfil como Cliente</h2>
      <form className="space-y-4" onSubmit={handleSubmit}>
        {['username', 'nombre', 'apellidos', 'email', 'telefono', 'pais'].map(field => (
          <input
            key={field}
            name={field}
            value={formData[field]}
            readOnly
            className="w-full p-2 border rounded bg-gray-100 text-gray-600"
          />
        ))}

        <input type="file" name="foto" accept="image/*" onChange={handleChange} />
        <input type="text" name="cedula" placeholder="Cédula o documento" onChange={handleChange} required />
        <input type="date" name="fechaNacimiento" onChange={handleChange} required />
        <input type="number" name="edad" placeholder="Edad" onChange={handleChange} required />
        <select name="genero" onChange={handleChange} required>
          <option value="">Selecciona género</option>
          <option value="Masculino">Masculino</option>
          <option value="Femenino">Femenino</option>
          <option value="Otro">Otro</option>
        </select>

        <input type="number" name="peso" placeholder="Peso (Kg o Lb)" onChange={handleChange} required />
        <input type="number" name="altura" placeholder="Altura (Cm)" onChange={handleChange} required />
        <select name="actividad" onChange={handleChange} required>
          <option value="">Nivel de actividad física</option>
          <option value="Baja">Baja</option>
          <option value="Moderada">Moderada</option>
          <option value="Alta">Alta</option>
        </select>

        <div className="border p-4 rounded bg-orange-50">
          <h3 className="font-semibold text-orange-600 mb-2">Resumen de tus objetivos</h3>
          <p className="text-sm text-gray-700">Aquí verás un resumen de tus objetivos cuando los configures.</p>
          <button
            type="button"
            className="mt-2 px-4 py-1 bg-orange-500 text-white rounded hover:bg-orange-600"
            onClick={() => navigate('/objetivos')}
          >
            Ir a Objetivos
          </button>
        </div>

        <button className="w-full bg-orange-500 text-white py-2 rounded hover:bg-orange-600">
          Ir al Dashboard
        </button>
      </form>
    </div>
  );
};

export default RegistroUsuario;
