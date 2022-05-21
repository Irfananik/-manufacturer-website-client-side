import React from 'react';

const PartsCard = ({ p }) => {
    const { name, img, description, price, aquantity, moquantity } = p
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
                        <button class="btn btn-primary">Order Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PartsCard;