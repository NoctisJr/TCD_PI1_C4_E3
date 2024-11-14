import loginImage from '../../assets/Img/loginImage.jpg';
import loginImageResponsive from '../../assets/Img/loginImageResponsive.jpg';
import './LoginForm.css'

const LoginForm = () => {
  return (
    <div className='login'>

      <div className='columna1'>
        
        <div className='seccion1'>
            <img src={loginImageResponsive} alt="loginImageResponsive" className='imagenResponsive'/> 
            <h2><i className="fi fi-ss-user"></i> User Login</h2>
            
            <h6>Login to access your account</h6>   
        </div>

        <div className='seccion2'>
          <form>
            <input type="email" name="email" placeholder="Correo electronico" className='mailInput'></input>
            <input type="password" name="password" placeholder="Contrasena" className='passwordInput'></input>
            <input type="submit" value="Login" className='loginButton'/>
          </form>
        </div>
        
        
             
      </div>

      <div className='columna2'>
        <img src={loginImage} alt="loginImage"/>
      </div>
    </div>
  )
}

export default LoginForm
