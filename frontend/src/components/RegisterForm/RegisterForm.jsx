import React, { useState } from "react";
import "./RegisterForm.css";
import RegisterImage from "../../assets/Img/imagen2.png"
import axios from "axios";
import { useNavigate } from 'react-router-dom';

const RegisterForm = () => {
  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");
  const [email, setEmail] = useState("");
  const [contraseña, setContraseña] = useState("");
  const [errores, setErrores] = useState({});
  const [registroExitoso, setRegistroExitoso] = useState(false); 
  const apiUrl = "https://ramoja-tours.up.railway.app/api/user"; 
  const navigate = useNavigate();

  // Función para validar el formulario
  const validarFormulario = () => {
    const nuevosErrores = {};

    if (!nombre.trim()) nuevosErrores.nombre = "El nombre es obligatorio.";
    if (!apellido.trim()) nuevosErrores.apellido = "El apellido es obligatorio.";
    if (!email.trim()) nuevosErrores.email = "El correo es obligatorio.";
    else if (!/\S+@\S+\.\S+/.test(email)) nuevosErrores.email = "El correo no es válido.";
    if (!contraseña) nuevosErrores.contraseña = "La contraseña es obligatoria.";
    else if (contraseña.length < 6) nuevosErrores.contraseña = "La contraseña debe tener al menos 6 caracteres.";

    return nuevosErrores;
  };

  // Función para manejar el envío del formulario
  const handleSubmit = (event) => {
    event.preventDefault();
    const nuevosErrores = validarFormulario();

    if (Object.keys(nuevosErrores).length === 0) {
      setRegistroExitoso(true); // Cambia el estado para mostrar el mensaje de éxito
      const dataToSend = {name: nombre, email: email, password: contraseña, phone: "0000000", grade: "YDS_5_6", isAdmin: false}
  
        axios.post(apiUrl, dataToSend, { headers: { 'Content-Type': 'application/json' } })
        .then((res) => {
          console.log(res.data);
          console.log(res.data.isAdmin);
          alert("Registro exitoso!");
          navigate('/login');
        })
        .catch((error) => {
          console.error("Error al iniciar sesión:", error);
          alert("Hubo un error en el inicio de sesión.");
        });
    } else {
      setErrores(nuevosErrores);
      setRegistroExitoso(false); 
    }
  };

  return (
    <div className="register-form-container">
      <div className="columna1-registro">
        <img src={RegisterImage} alt="RegisterImage" />
      </div>

      <div className="columna2-registro">
        <h2>Crear Cuenta</h2>
        {/* Mensaje de éxito */}
        {registroExitoso && (
          <div className="success-message">
            ¡Registro exitoso! Bienvenido/a, {nombre}.
          </div>
        )}
        <form onSubmit={handleSubmit} className="register-form">
          <div className="form-group">
            <label htmlFor="nombre">Nombre</label>
            <input
              type="text"
              id="nombre"
              value={nombre}
              onChange={(e) => setNombre(e.target.value)}
              className={errores.nombre ? "input-error" : ""}
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
              className={errores.apellido ? "input-error" : ""}
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
              className={errores.email ? "input-error" : ""}
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
              className={errores.contraseña ? "input-error" : ""}
            />
            {errores.contraseña && <span className="error-message">{errores.contraseña}</span>}
          </div>

          <button type="submit" className="submit-button">
            Registrarse
          </button>
        </form>
      </div>
    </div>
  );
};

export default RegisterForm;
