import './TourDetail.css';
import mojarraImage from './assets/Img/mojarra1.jpg';

function TourDetail() {
  return (
    <div className="tour-detail">
      {/* Left section with the main image */}
      <div className="tour-detail-image">
        <img
          src={mojarraImage} // Replace with your actual image URL
          alt="Escalada en la Mojarra"
        />
      </div>

      {/* Right section with tour details */}
      <div className="tour-detail-info">
        <h1>Tour Escalada en la Mojarra</h1>
        <p>Disfruta de una emocionante aventura de escalada en uno de los destinos más hermosos.</p>

        {/* Options */}
        <div className="tour-options">
          <div>
            <strong>Horario:</strong>
            <select>
              <option value="tarde">Tarde</option>
              <option value="noche">Noche</option>
            </select>
          </div>

          <div>
            <strong>Estilo:</strong>
            <select>
              <option value="deportiva">Deportiva</option>
              <option value="clasica">Clásica</option>
              <option value="viaFerrata">Via Ferrata</option>
            </select>
          </div>

          <div>
            <strong>Dificultad:</strong>
            <select>
              <option value="principiante">Principiante</option>
              <option value="intermedio">Intermedio</option>
              <option value="avanzado">Avanzado</option>
            </select>
          </div>

          <div>
            <strong>Alimentación:</strong>
            <select>
              <option value="vegano">Vegano</option>
              <option value="vegetariano">Vegetariano</option>
              <option value="completo">Completo</option>
              <option value="sinAlimentacion">Sin Alimentación</option>
            </select>
          </div>

          {/* Checkbox for equipment rental */}
          <div className="tour-checkbox">
            <label>
              <input type="checkbox" /> Deseo Alquilar Equipo
            </label>
          </div>

          {/* Price */}
          <div className="tour-price">
            <strong>Precio:</strong> $ 129
          </div>
          {/* Reservar Button */}
          <button className="reserve-button">
            Reservar
          </button>
        </div>
      </div>
    </div>
  );
}

export default TourDetail;
