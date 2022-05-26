import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const MyOrder = () => {
    const [userEmail, setUserEmail] = useState([])
    const [user] = useAuthState(auth)

    useEffect(() => {
        fetch(`http://localhost:5000/placeorder?email=${user.email}`)
            .then(response => response.json())
            .then(data => setUserEmail(data))
    }, [user])
    return (
        <div>
            <h2 className="text-center text-accent my-6">Your Orders Info: {userEmail.length}</h2>
            <div class="overflow-x-auto">
                <table class="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Item</th>
                            <th>Price</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            userEmail.map((user, index) => <tr>
                                <th>{index + 1}</th>
                                <td>{user.userName}</td>
                                <td>{user.email}</td>
                                <td>{user.item}</td>
                                <td>{user.price}</td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyOrder;