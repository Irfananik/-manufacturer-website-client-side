import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useParams } from 'react-router-dom';
import { useForm } from "react-hook-form";
import { toast } from 'react-toastify';
import auth from '../firebase.init';
import Loading from './Components/Loading';

const Purchase = () => {
    const { partsId } = useParams()
    const [part, setPart] = useState([])


    useEffect(() => {
        const url = `https://stormy-brook-30276.herokuapp.com/parts/${partsId}`
        fetch(url)
            .then(response => response.json())
            .then(data => setPart(data))
    }, [partsId])

    const [user, loading] = useAuthState(auth)

    const { register, formState: { errors }, handleSubmit } = useForm()

    if (loading) {
        return <Loading />
    }

    const onSubmit = (data, event) => {
        const totalPrice = parseInt(part.price * data.quantity)
        const booking = {
            itemId: part._id,
            item:part.name,
            price: totalPrice,
            name: user.displayName,
            email: user.email,
            quantity: data.quantity,
            phone: data.number,
            address: data.address
        }
        //console.log(data)
        fetch('https://stormy-brook-30276.herokuapp.com/placeorder', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(booking)
        })
            .then(res => res.json())
            .then(data => {
                //console.log(data);
                toast('Your ordar placed!!!')
                event.target.reset()
            })
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
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <div className="form-control mb-2">
                                <input
                                    {...register("email")}
                                    value={user?.email}
                                    className="input input-bordered"
                                />
                            </div>
                            <div className="form-control mb-2">
                                <input
                                    {...register("item")}
                                    value={part?.name}
                                    className="input input-bordered"
                                />
                            </div>
                            <div className="form-control mb-2">
                                <input
                                    {...register("price")}
                                    value={part?.price}
                                    className="input input-bordered"
                                />
                            </div>
                            <div className="form-control mb-2">
                                <input
                                    {...register("userName")}
                                    value={user?.displayName}
                                    className="input input-bordered"
                                />
                            </div>
                            <div className="form-control mb-2">
                                <input
                                    {...register("number", { required: true })}
                                    placeholder="Your Phone Number"
                                    className="input input-bordered"
                                />
                            </div>
                            <div className="form-control mb-2">
                                <textarea
                                    {...register("address", { required: true })}
                                    placeholder="Your Address"
                                    className="input input-bordered"
                                />
                            </div>
                            <div className="form-control mb-2">
                                <label className="label">
                                    <span className="label-text">Quantity</span>
                                </label>
                                <input
                                    {...register("quantity", {
                                        max: {
                                            value: part?.aquantity,
                                            message: `Available items ${part?.aquantity}`
                                        },
                                        min: {
                                            value: part?.moquantity,
                                            message: `Minimum Order ${part?.moquantity}`
                                        }
                                    })}
                                    placeholder={`Minimum ${part?.moquantity} pices`}
                                    required
                                    className="input input-bordered"
                                />
                            </div>
                            <label className="label">
                                {errors?.quantity?.type === 'max' && <span className="label-text-alt text-red-500">{errors?.quantity?.message}</span>}
                                {errors?.quantity?.type === 'min' && <span className="label-text-alt text-red-500">{errors?.quantity?.message}</span>}
                            </label>
                            <div className="form-control">
                                {
                                    errors?.quantity?.type === 'max' || errors?.quantity?.type === 'min'
                                        ?
                                        <input
                                            disabled
                                            type="submit"
                                            className='btn btn-primary'
                                            value="Purchase"
                                        />
                                        :
                                        <input
                                            type="submit"
                                            className='btn btn-primary'
                                            value="Purchase"
                                        />

                                }

                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Purchase;