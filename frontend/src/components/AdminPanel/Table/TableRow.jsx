/* eslint-disable react/prop-types */
const TableRow = ({ item }) => {
    return (
        <tr>
            <td>{item.destination}</td>
            <td>{item.description}</td>
            <td>{item.categoryId}</td>
            <td>{item.climbingStyle || '-'}</td>
            <td>{item.level || '-'}</td>
            <td>{item.day}</td>
            <td>{item.schedule}</td>
            <td>
                <span className={`status ${item.status.toLowerCase()}`}>
                    {item.status}
                </span>
            </td>
            <td>
                <button className="action-button">✏️</button>
            </td>
        </tr>
    );
};

export default TableRow;
