/* eslint-disable react/prop-types */
import TableRow from './TableRow';
import './Table.css';

const Table = ({ data }) => {
  return (
    <div className="table-container">
      <table>
        <thead>
          <tr>
            <th>Lugar</th>
            <th>Descripción</th>
            <th>Categoría</th>
            <th>Tipo Escalada</th>
            <th>Dificultad</th>
            <th>Día</th>
            <th>Horario</th>
            <th>Estatus</th>
            <th>Acción</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <TableRow key={item.id} item={item} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;