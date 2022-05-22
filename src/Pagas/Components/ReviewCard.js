import React from 'react';

const ReviewCard = ({review}) => {
    const {name, comment} = review;
    return (
        <div>
            <div class="cardlg:max-w-lg bg-primary shadow-xl rounded-lg">
                <div class="card-body">
                    <h2 class="card-title text-white">{name}</h2>
                    <p className="text-accent">{comment}</p>
                    <div class="card-actions justify-end">
                        <button class="btn btn-primary">See details</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ReviewCard;