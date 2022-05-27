import React, { useState } from 'react';
import { useQuery } from 'react-query';
import Loading from '../Components/Loading';
import DeleteConModal from './DeleteConModal';
import ManageProductTable from './ManageProductTable';

const ManageProduc = () => {
    const [deleteUser, setDeleteUser] = useState(null)
    const { data: parts, isLoading, refetch } = useQuery('parts', () => fetch('https://stormy-brook-30276.herokuapp.com/parts', {
        headers: {
            'authorization': `Bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(response => response.json()))

    if (isLoading) {
        return <Loading />
    }

    return (
        <div>
            <h2 className="text-2xl text-center my-6">manage products{parts?.length}</h2>
            <div class="overflow-x-auto">
                <table class="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Item name</th>
                            <th>Price</th>
                            <th>Manage</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            parts.map((part, index) => <ManageProductTable key={part._id} part={part} refetch={refetch} index={index} setDeleteUser = {setDeleteUser}/>)
                        }
                    </tbody>
                </table>
            </div>
            {
                deleteUser && <DeleteConModal deleteUser={deleteUser} refetch={refetch} setDeleteUser = {setDeleteUser}/>
            }
        </div>
    );
};

export default ManageProduc;