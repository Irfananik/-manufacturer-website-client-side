import React from 'react';

const ManageProductTable = ({ part, index, refetch, setDeleteUser }) => {
    const { name, price } = part
    return (
        <tr>
            <th>{index + 1}</th>
            <td>{name}</td>
            <td>{price}</td>
            <td>
                <label onClick={() => setDeleteUser(part)} for="my-modal-6" class="btn btn-sm modal-button btn-error">Manage Item</label>
            </td>
        </tr>
    );
};

export default ManageProductTable;