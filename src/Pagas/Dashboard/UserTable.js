import React from 'react';
import { toast } from 'react-toastify';

const UserTable = ({ user, refetch, index }) => {
    const { email, role } = user

    const makeAdmin = () => {
        fetch(`http://localhost:5000/user/admin/${email}`, {
            method: 'PUT',
            headers: {
                'authorization': `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(response => response.json())
            .then(data => {
                //console.log(data)
                toast.success("Made an admin!")
                refetch()
            })
    }
    return (
        <tr>
            <th>{index + 1}</th>
            <td>{email}</td>
            <td>{role !== 'admin' && <button onClick={makeAdmin} class="btn btn-sm btn-primary">Admin</button>}</td>
            <td>Blue</td>
        </tr>
    );
};

export default UserTable;