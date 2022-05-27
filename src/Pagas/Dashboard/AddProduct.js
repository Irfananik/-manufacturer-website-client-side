import React from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';

const AddProduct = () => {
    const { register, handleSubmit } = useForm()

    const imageStoreKey = 'ee9ff619829be90d22cb188bb657dd9b'

    const onSubmit = (data, event) => {
        console.log(data)
        const image = data.img[0]
        const formData = new FormData()
        formData.append('image', image)
        const url = `https://api.imgbb.com/1/upload?key=${imageStoreKey}`
        fetch(url, {
            method: 'POST',
            body: formData
        })
            .then(response => response.json())
            .then(result => {
                if (result.success) {
                    const img = result.data.url

                    const addProduct = {
                        name: data.name,
                        price: data.price,
                        img: img,
                        description: data.description,
                        moquantity: data.moquantity,
                        aquantity: data.aquantity
                    }

                    fetch('http://localhost:5000/parts', {
                        method: 'POST',
                        headers: {
                            'content-type': 'application/json',
                            'authorization': `Bearer ${localStorage.getItem('accessToken')}`
                        },
                        body: JSON.stringify(addProduct)
                    })
                        .then(response => response.json())
                        .then(data => {
                            toast.success('Item added successfully!')
                            event.target.reset()
                        })
                }
            })
    }
    return (
        <div className="flex justify-center items-center my-10">
            <div class="card lg:max-w-lg bg-base-100 shadow-xl">
                <div class="card-body">
                    <h2 class="card-title">Add products by admin!</h2>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="form-control mb-2">
                            <input
                                {...register("name", { required: true })}
                                placeholder="Add item name"
                                className="input input-bordered"
                            />
                        </div>
                        <div className="form-control mb-2">
                            <input
                                {...register("price", { required: true })}
                                placeholder="Add Price"
                                className="input input-bordered"
                            />
                        </div>
                        <div className="form-control mb-2">
                            <input
                                {...register("img", { required: true })}
                                type='file'
                                className="input input-bordered"
                            />
                        </div>
                        <div className="form-control mb-2">
                            <textarea
                                {...register("description", { required: true })}
                                placeholder="Add description"
                                className="input input-bordered"
                            />
                        </div>
                        <div className="form-control mb-2">
                            <input
                                {...register("moquantity", { required: true })}
                                placeholder="Add max quantity"
                                className="input input-bordered"
                            />
                        </div>
                        <div className="form-control mb-2">
                            <input
                                {...register("aquantity", { required: true })}
                                placeholder="Add available quantity"
                                className="input input-bordered"
                            />
                        </div>
                        <div className="form-control">
                            {

                                <input
                                    type="submit"
                                    className='btn btn-primary'
                                    value="Add"
                                />

                            }

                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddProduct;