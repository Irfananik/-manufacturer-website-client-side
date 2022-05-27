import React from 'react';
import { useQuery } from 'react-query'
import Loading from '../Components/Loading';
import UserTable from './UserTable';

const User = () => {
    const { data: users, isLoading, refetch,} = useQuery('users', () => fetch('https://stormy-brook-30276.herokuapp.com/user', {
        method: 'GET',
        headers: {
            'authorization': `Bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(res => res.json()))

    if (isLoading) {
        return <Loading />
    }

    return (
        <div>
            <h2 className="text-center text-accent my-6 text-xl">All User: {users?.length}</h2>
            <div class="overflow-x-auto">
                <table class="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Make Admin</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users.map((user, index) => <UserTable key={user._id} user={user} refetch={refetch} index={index}/>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default User;