import { useState } from 'react';
import loginImage from '../../assets/Img/loginImage.jpg';
import loginImageResponsive from '../../assets/Img/loginImageResponsive.jpg';
import './LoginForm.css';

const LoginForm = () => {
  // Estados para almacenar los valores del formulario y los errores
  const [email, setEmail] = useState("");
  const [contraseña, setContraseña] = useState("");
  const [errores, setErrores] = useState({});

  // Función para validar el formulario
  const validarFormulario = () => {
    const nuevosErrores = {};

    // Validaciones básicas
    if (!email.trim()) nuevosErrores.email = "El correo es obligatorio.";
    else if (!/\S+@\S+\.\S+/.test(email))
      nuevosErrores.email = "El correo no es válido.";
    
    if (!contraseña) nuevosErrores.contraseña = "La contraseña es obligatoria.";
    else if (contraseña.length < 6)
      nuevosErrores.contraseña = "La contraseña debe tener al menos 6 caracteres.";

    return nuevosErrores;
  };

  // Función para manejar el envío del formulario
  const handleSubmit = (event) => {
    event.preventDefault();
    const nuevosErrores = validarFormulario();

    if (Object.keys(nuevosErrores).length === 0) {
      alert("Login exitoso!");
      // Aquí puedes agregar la lógica de envío al servidor
    } else {
      setErrores(nuevosErrores);
    }
  };

  return (
    <div className='login'>
      <div className='columna1'>
        <div className='seccion1'>
          <img src={loginImageResponsive} alt="loginImageResponsive" className='imagenResponsive' /> 
          <h2><i className="fi fi-ss-user"></i> User Login</h2>
          <h6>Login to access your account</h6>   
        </div>

        <div className='seccion2'>
          <form className='formLogin' onSubmit={handleSubmit}>
            <input
              type="email"
              name="email"
              placeholder="Correo electrónico"
              className='mailInput'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            {errores.email && <div className="error">{errores.email}</div>}

            <input
              type="password"
              name="password"
              placeholder="Contraseña"
              className='passwordInput'
              value={contraseña}
              onChange={(e) => setContraseña(e.target.value)}
            />
            {errores.contraseña && <div className="error">{errores.contraseña}</div>}

            <input type="submit" value="Login" className='loginButton' />
          </form>
        </div>
      </div>

      <div className='columna2'>
        <img src={loginImage} alt="loginImage" />
      </div>
    </div>
  );
}

export default LoginForm;
