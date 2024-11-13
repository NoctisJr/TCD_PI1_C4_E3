import React, { useState } from 'react';
import './Form.css';

const RegisterForm = () => {
  // Estados de los campos de entrada
  const [nombre, setNombre] = useState('');
  const [apellido, setApellido] = useState('');
  const [email, setEmail] = useState('');
  const [contraseña, setContraseña] = useState('');
  const [errores, setErrores] = useState({});

  // Función para validar el formulario
  const validarFormulario = () => {
    const nuevosErrores = {};

    // Validaciones básicas
    if (!nombre.trim()) nuevosErrores.nombre = 'El nombre es obligatorio.';
    if (!apellido.trim()) nuevosErrores.apellido = 'El apellido es obligatorio.';
    if (!email.trim()) nuevosErrores.email = 'El correo es obligatorio.';
    else if (!/\S+@\S+\.\S+/.test(email)) nuevosErrores.email = 'El correo no es válido.';
    if (!contraseña) nuevosErrores.contraseña = 'La contraseña es obligatoria.';
    else if (contraseña.length < 6) nuevosErrores.contraseña = 'La contraseña debe tener al menos 6 caracteres.';

    return nuevosErrores;
  };

  // Función para manejar el envío del formulario
  const handleSubmit = (event) => {
    event.preventDefault();
    const nuevosErrores = validarFormulario();
    
    if (Object.keys(nuevosErrores).length === 0) {
      alert('Registro exitoso!');
      // Aquí puedes agregar la lógica de envío al servidor
    } else {
      setErrores(nuevosErrores);
    }
  };

  return (
    <div className="register-form-container">
      <h2>Crear Cuenta</h2>
      <form onSubmit={handleSubmit} className="register-form">
        <div className="form-group">
          <label htmlFor="nombre">Nombre</label>
          <input
            type="text"
            id="nombre"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
            className={errores.nombre ? 'input-error' : ''}
          />
          {errores.nombre && <span className="error-message">{errores.nombre}</span>}
        </div>

        <div className="form-group">
          <label htmlFor="apellido">Apellido</label>
          <input
            type="text"
            id="apellido"
            value={apellido}
            onChange={(e) => setApellido(e.target.value)}
            className={errores.apellido ? 'input-error' : ''}
          />
          {errores.apellido && <span className="error-message">{errores.apellido}</span>}
        </div>

        <div className="form-group">
          <label htmlFor="email">Correo Electrónico</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className={errores.email ? 'input-error' : ''}
          />
          {errores.email && <span className="error-message">{errores.email}</span>}
        </div>

        <div className="form-group">
          <label htmlFor="contraseña">Contraseña</label>
          <input
            type="password"
            id="contraseña"
            value={contraseña}
            onChange={(e) => setContraseña(e.target.value)}
            className={errores.contraseña ? 'input-error' : ''}
          />
          {errores.contraseña && <span className="error-message">{errores.contraseña}</span>}
        </div>

        <button type="submit" className="submit-button">Registrarse</button>
      </form>
    </div>
  );
};

export default RegisterForm;
