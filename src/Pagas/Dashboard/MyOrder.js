import { signOut } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';

const MyOrder = () => {
    const [userEmail, setUserEmail] = useState([])
    const [user] = useAuthState(auth)
    const navigate = useNavigate()

    useEffect(() => {
        fetch(`https://stormy-brook-30276.herokuapp.com/placeorder?email=${user.email}`, {
            method: 'GET',
            headers: {
                'authorization': `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(response => {
                //console.log(response)
                if (response.status === 401 || response.status === 403) {
                    signOut(auth)
                    localStorage.removeItem('accessToken')
                    navigate('/login')
                }
                else {

                }
                return response.json()
            })
            .then(data => {
                setUserEmail(data)
            })
    }, [user, navigate])
    //console.log(user)
    return (
        <div>
            <h2 className="text-center text-accent my-6">Your Orders Info: {userEmail?.length}</h2>
            <div class="overflow-x-auto">
                <table class="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Email</th>
                            <th>Item</th>
                            <th>Price</th>
                            <th>Manage</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            userEmail.map((user, index) => <tr>
                                <th>{index + 1}</th>
                                <td>{user?.email}</td>
                                <td>{user?.item}</td>
                                <td>{user?.price}</td>
                                <td className="me-3">
                                    <button class="btn btn-sm btn-error">Cancel</button>
                                    <button class="btn btn-sm">Pay</button>
                                </td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyOrder;