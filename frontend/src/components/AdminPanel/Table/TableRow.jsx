/* eslint-disable react/prop-types */
const TableRow = ({ item, headers, onDelete }) => {

    return (
        <tr>
            {headers.map((header, index) => {
                const fieldContent = item[header];

                if (header === "isAdmin" && fieldContent === true) {
                    // Special styling for "ADMIN"
                    return (
                        <td key={index}>
                            <span className="admin-label">ADMIN</span>
                        </td>
                    );
                }

                if (Array.isArray(fieldContent)) {
                    // Render arrays (like imgUrlList) as anchor tags
                    return (
                        <td key={index}>
                            {fieldContent.map((url, i) => (
                                <a
                                    key={i}
                                    href={url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="image-link"
                                >
                                    {`img${i + 1}`}
                                </a>
                            ))}
                        </td>
                    );
                }

                return <td key={index}>{fieldContent || '-'}</td>;
            })}
            {/* <td>
                <span className={`status ${item.status?.toLowerCase() || "activo"}`}>
                    {item.status || "Activo"}
                </span>
            </td> */}
            <td>
                <button className="action-button"><span title="Editar">✏️</span></button>
                <button className="action-button"><span title="Eliminar" onClick={() => onDelete(item)}>❌</span></button>
            </td>
        </tr>
    );
};

export default TableRow;
