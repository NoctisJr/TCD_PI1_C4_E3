import React from 'react';
import './footer.css';
import logoFooter from '../../assets/Img/logoFooter.png';

const Footer = () => {
  return (
    <footer>
        
          <div className="logoFooter">
              <p className='imgLogo'><img src={logoFooter} alt="page-logo" style={{ maxHeight: '5vh' }} /></p>
              <p className='copyright'>© 2024 La Ramoja</p>
          </div>

          <div className="redes">
                  <p className='instagram'><i className="fi fi-brands-instagram"></i></p>
                  <p className='facebook'><i className="fi fi-brands-facebook"></i></p>
                  <p className='whatsapp'><i className="fi fi-brands-whatsapp"></i></p>
          </div>
        
    </footer>
  )
}

export default Footer

