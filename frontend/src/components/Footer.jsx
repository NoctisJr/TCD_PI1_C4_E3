import React from 'react';
import './footer.css';
import logoFooter from '../assets/Img/logoFooter.png';

const Footer = () => {
  return (
    <footer>
        
        <ul className="foot">
          
          <div className="logo">
                <ul className="redes">
                    <li className='instagram'><i className="fi fi-brands-instagram"></i></li>
                    <li className='facebook'><i className="fi fi-brands-facebook"></i></li>
                    <li className='whatsapp'><i className="fi fi-brands-whatsapp"></i></li>
                </ul>
                <p><img src={logoFooter} alt="page-logo" style={{ maxHeight: '5vh' }} /></p>
                <p>© 2024 La Ramoja</p>
          </div>
          
          <div>
          <li>
            <ul>
              <li>En la montaña la mojarra</li>
              <li>En la montaña la mojarra</li>
              <li>En la montaña la mojarra</li>
              <li>En la montaña la mojarra</li>
            </ul>
          </li>
          </div>

          <div>
          <li>
            <ul>
              <li>En la montaña la mojarra</li>
              <li>En la montaña la mojarra</li>
              <li>En la montaña la mojarra</li>
              <li>En la montaña la mojarra</li>
            </ul>
          </li>
          </div>

        </ul>
        
    </footer>
  )
}

export default Footer