/* eslint-disable react/prop-types */
const TableRow = ({ item, headers }) => {
    return (
        <tr>
            {headers.map((header, index) => (
                <td key={index}>{item[header]===true? "ADMIN": item[header] || '-'}</td>
            ))}
            <td>
                <span className={`status ${item.status?.toLowerCase() || "activo"}`}>
                    {item.status || "Activo"}
                </span>
            </td>
            <td>
                <button className="action-button">✏️</button>
                <button className="action-button">❌</button>
            </td>
        </tr>
    );
};

export default TableRow;
