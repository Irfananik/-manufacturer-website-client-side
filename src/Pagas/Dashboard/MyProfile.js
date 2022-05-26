import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { useForm } from "react-hook-form";

const MyProfile = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm()
    const [user] = useAuthState(auth)

    const onSubmit = (data, event) => {

    }

    return (
        <div className="flex justify-center items-center my-10">
            <div class="card w-96 bg-primary text-primary-content">
                <div class="card-body">
                    <h2 class="card-title">Your Profile</h2>
                    <p>Name: {user.displayName}</p>
                    <p>Email: {user.email}</p>
                    <div>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <div className="form-control mb-2">
                                <textarea
                                    {...register("education", { required: true })}
                                    placeholder="Education"
                                    className="input input-bordered"
                                />
                            </div>
                            <div className="form-control mb-2">
                                <textarea
                                    {...register("location", { required: true })}
                                    placeholder="Your Location"
                                    className="input input-bordered"
                                />
                            </div>
                            <div className="form-control mb-2">
                                <input
                                    type="number"
                                    {...register("phone", { required: true })}
                                    placeholder="Your Phone"
                                    className="input input-bordered"
                                />
                            </div>
                            <div className="form-control mb-2">
                                <input
                                    {...register("linkdin", { required: true })}
                                    placeholder="LinkdIn Link"
                                    className="input input-bordered"
                                />
                            </div>
                            {errors.exampleRequired && <span>This field is required</span>}

                            <button className="btn btn-accent"><input type="submit" /></button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MyProfile;