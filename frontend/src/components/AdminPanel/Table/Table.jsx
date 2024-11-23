/* eslint-disable react/prop-types */
import TableRow from './TableRow';
import './Table.css';

const Table = ({ data, onDelete }) => {
  const headers = Object.keys(data[0] || {});
  return (
    <div className="table-container">
      <table>
        <thead>
          <tr>
            {
              headers.map((header,index)=> {
                return(
                  <th key={index}>{header}</th>
                )
              })
            }
            {/* <th>Estatus</th> */}
            <th>Acción</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <TableRow key={item.id} item={item} headers={headers} onDelete={onDelete} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;