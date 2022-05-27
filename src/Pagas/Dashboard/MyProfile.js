import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { useForm } from "react-hook-form";
import { toast } from 'react-toastify';

const MyProfile = () => {
    const [myProfile, setMyProfile] = useState([])
    const { register, handleSubmit, watch, formState: { errors } } = useForm()
    const [user] = useAuthState(auth)

    useEffect(() => {
        if (user) {
            fetch(`http://localhost:5000/myprofile?email=${user.email}`, {
                method: 'GET',
                headers: {
                    'authorization': `Bearer ${localStorage.getItem('accessToken')}`
                }
            })
                .then(res => res.json())
                .then(data => setMyProfile(data))
        }
    }, [user])

    const onSubmit = (data, event) => {
        const profile = {
            education: data.education,
            linkedin: data.linkedin,
            location: data.location,
            phone: data.phone,
            email: user.email
        }
        const url = `http://localhost:5000/myprofile/${user?.email}`
        fetch(url, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(profile)
        })
            .then(res => res.json())
            .then(posted => {
                toast('Updated profile')
            });
        event.target.reset();
    }

    return (
        <div className="flex justify-center items-center my-10">
            <div class="card w-96 bg-primary text-primary-content">
                <div class="card-body">
                    <h2 class="card-title">Update Your Profile</h2>
                    <p>Name: {user.displayName}</p>
                    <p>Email: {user.email}</p>
                    <div>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <div className="form-control mb-2">
                                <input
                                    {...register("email", { required: true })}
                                    value={user?.email}
                                    className="input input-bordered"
                                />
                            </div>
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
                                    {...register("linkedin", { required: true })}
                                    placeholder="LinkdIn Link"
                                    className="input input-bordered"
                                />
                            </div>
                            {errors.exampleRequired && <span>This field is required</span>}

                            <button className="btn btn-accent"><input type="submit" /></button>
                        </form>
                        <div class="card lg:max-w-lg bg-base-100 shadow-xl my-6">
                            <div class="card-body">
                                <h2 class="card-title">Your Profile</h2>
                                {
                                    myProfile?.map(mp => <div key={mp._id}>
                                        <h2 className=''>Education: <span className='text-bold '>{mp?.education}</span></h2>
                                        <h2 className=''>Location: <span className='text-bold '>{mp?.location}</span></h2>
                                        <h2 className=''>Phone: <span className='text-bold '>{mp?.phone}</span></h2>
                                        <h2 className=''>Linkedin Id: <span className='text-bold'>{mp?.linkedin}</span></h2>
                                    </div>)
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MyProfile;