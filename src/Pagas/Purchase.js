import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, useParams } from 'react-router-dom';
import auth from '../firebase.init';

const Purchase = () => {
    const { partsId } = useParams()
    const [part, setPart] = useState([])

    useEffect(() => {
        const url = `http://localhost:5000/parts/${partsId}`
        fetch(url)
            .then(response => response.json())
            .then(data => setPart(data))
    }, [partsId])

    const [user, loading, error] = useAuthState(auth)

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
                        <div class="form-control">
                            <input type="number" name='quantity' placeholder="Product Quantity" class="input input-bordered my-3" />
                            <input type="text" name='product' disabled value={part?.name} placeholder="Product Name" class="input input-bordered my-3" />
                            <input type="number" name='price' disabled value={part?.price} placeholder="Product Price" class="input input-bordered my-3" />
                            <input type="text" name='name' disabled value={user?.displayName} placeholder="User Name" class="input input-bordered my-3" />
                            <input type="email" name='email' disabled value={user?.email} placeholder="User Email" class="input input-bordered my-3" />
                            <input type="text" name='address' placeholder="User Address" class="input input-bordered my-3" />
                            <input type="number" name='phone' placeholder="User Number" class="input input-bordered my-3" />
                        </div>
                        <div class="form-control mt-6">
                            <button disabled={part?.moquantity > 100} class="btn btn-primary">Place Order</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Purchase;