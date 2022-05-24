import React from 'react';
import { useNavigate } from 'react-router-dom';

const PartsCard = ({ p }) => {
    const { _id, name, img, description, price, aquantity, moquantity } = p

    const navigate = useNavigate()

    const hadlePartsDetails = id => {
        navigate(`/purchase/${id}`)
       
    }

    return (
        <div>
            <div class="card lg:max-w-lg bg-base-100 shadow-xl">
                <figure><img src={img} alt="Shoes" /></figure>
                <div class="card-body">
                    <h2 class="card-title">{name}</h2>
                    <p>{description}</p>
                    <h3 className="font-bold">Price: <span className='text-secondary'>{price}</span> </h3>
                    <h3 className="font-bold">Minimum Order Quantity: <span className='text-secondary'>{moquantity}</span> </h3>
                    <h3 className="font-bold">Available Quantity: <span className='text-secondary'>{aquantity}</span> </h3>
                    <div class="card-actions justify-end">
                        <button onClick={() => hadlePartsDetails(_id)} class="btn btn-primary">Order Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PartsCard;