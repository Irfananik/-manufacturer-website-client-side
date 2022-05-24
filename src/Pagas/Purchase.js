import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../firebase.init';

const Purchase = ({refetch}) => {
    const { partsId } = useParams()
    const [part, setPart] = useState([])

    useEffect(() => {
        const url = `http://localhost:5000/parts/${partsId}`
        fetch(url)
            .then(response => response.json())
            .then(data => setPart(data))
    }, [partsId])

    const [user, loading, error] = useAuthState(auth)

    const handlePlaceOrder = event => {
        event.preventDefault()

        const placeOrder = {
            placeOrderId: part._id,
            producQuantity: event.target.quantity.value,
            price: part.price,
            userName: user.displayName,
            userEmail: user.email,
            userAddress: event.target.address.value,
            userPhone: event.target.phone.value
        }

        fetch('http://localhost:5000/placeorder', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(placeOrder)
        })
            .then(response => response.json())
            .then(data => {
                console.log(data)
                toast.success('Your order placement completed successfully!')
            })
            refetch()
    }

    return (
        <div className="flex justify-center items-center my-10">
            <div className="card lg:card-side bg-base-100 shadow-xl lg:max-w-lg p-8">
                <figure><img src={part?.img} alt="Album" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{part.name}</h2>
                    <p>{part.description}</p>
                    <h3 className="font-bold">Price: <span className='text-secondary'>{part?.price}</span> </h3>
                    <h3 className="font-bold">Minimum Order Quantity: <span className='text-secondary'>{part?.moquantity}</span> </h3>
                    <h3 className="font-bold">Available Quantity: <span className='text-secondary'>{part?.aquantity}</span> </h3>
                    <div className="card-actions justify-end">
                        <form onSubmit={handlePlaceOrder} class="form-control">
                            <input type="number" name='quantity' placeholder="Product Quantity" class="input input-bordered my-3" />
                            <input type="text" name='product' disabled value={part?.name} placeholder="Product Name" class="input input-bordered my-3" />
                            <input type="number" name='price' disabled value={part?.price} placeholder="Product Price" class="input input-bordered my-3" />
                            <input type="text" name='name' disabled value={user?.displayName} placeholder="User Name" class="input input-bordered my-3" />
                            <input type="email" name='email' disabled value={user?.email} placeholder="User Email" class="input input-bordered my-3" />
                            <input type="text" name='address' placeholder="User Address" class="input input-bordered my-3" />
                            <input type="number" name='phone' placeholder="User Number" class="input input-bordered my-3" />
                            <input type="submit" value="Submit" className="btn btn-secondary w-full max-w-xs my-3" />
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Purchase;