import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from "react-hook-form";
import { toast } from 'react-toastify';
import auth from '../../firebase.init';

const AddReview = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm()

    const onSubmit = (data, event) => {
        fetch('https://stormy-brook-30276.herokuapp.com/review', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(data => {
                toast('Your review done!!!')
                event.target.reset()
            })
    }
    const [user, loading] = useAuthState(auth)
    return (
        <div className="my-20">
            <div className="card lg:card-side bg-base-100 shadow-xl">
                <figure><img src="https://i.ibb.co/HKJRgrG/R-1.png" alt="Album" /></figure>
                <div className="card-body">
                    <h2 className="text-accent text-center my-6">Add Your Review</h2>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="form-control mb-2">
                            <input
                                {...register("userName")}
                                value={user?.displayName}
                                className="input input-bordered"
                            />
                        </div>
                        <div className="form-control mb-2">
                            <input
                                type="number"
                                {...register("rating", { required: true })}
                                placeholder="Your rating"
                                className="input input-bordered"
                            />
                        </div>
                        <div className="form-control mb-2">
                            <textarea
                                {...register("comments", { required: true })}
                                placeholder="Your comments"
                                className="input input-bordered"
                            />
                        </div>
                        {errors.exampleRequired && <span>This field is required</span>}

                        <button className="btn btn-primary"><input type="submit" /></button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddReview;