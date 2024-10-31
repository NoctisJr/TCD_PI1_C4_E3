import React from 'react';
import './footer.css';

const Footer = () => {
  return (
    <footer>
        
        <ul class='foot'>
          
          <li>
            <ul class='logo'>
              <li>
                <ul class="redes">
                  <li class='instagram'><i class="fi fi-brands-instagram"></i></li>
                  <li class='facebook'><i class="fi fi-brands-facebook"></i></li>
                  <li class='whatsapp'><i class="fi fi-brands-whatsapp"></i></li>
                </ul>
              </li>
              <li>
              <img src="/src/images/logoFooter.png" alt="page-logo" style={{ maxHeight: '5vh' }} />
              </li>
              <li>© 2024 La Ramoja</li>
            </ul>
          </li>
          
          <li>
            <ul>
              <li>En la montaña la mojarra</li>
              <li>En la montaña la mojarra</li>
              <li>En la montaña la mojarra</li>
              <li>En la montaña la mojarra</li>
            </ul>
          </li>
          
          <li>
            <ul>
              <li>En la montaña la mojarra</li>
              <li>En la montaña la mojarra</li>
              <li>En la montaña la mojarra</li>
              <li>En la montaña la mojarra</li>
            </ul>
          </li>

        </ul>
        
    </footer>
  )
}

export default Footer