import React from 'react';
import './footer.css';
import logoFooter from '../../assets/Img/logoFooter.png';

const Footer = () => {
  return (
    <footer>
        
        <div className="foot">
          
          <div className="logoFooter">
            <ul>
              <li className='imgLogo'><img src={logoFooter} alt="page-logo" style={{ maxHeight: '5vh' }} /></li>
              <li className='copyright'>© 2024 La Ramoja</li>
            </ul>
          </div>
          
          <div className="Categorias">
            <ul className='categorias'>
              <li>Home</li>
              <li>Tours</li>
              <li>Admin</li>
            </ul>
          </div>

          <div className="Redes">
              <ul className="redesSociales">
                  <li className='instagram'><i className="fi fi-brands-instagram"></i></li>
                  <li className='facebook'><i className="fi fi-brands-facebook"></i></li>
                  <li className='whatsapp'><i className="fi fi-brands-whatsapp"></i></li>
              </ul>
          </div>

        </div>
        
    </footer>
  )
}

export default Footer