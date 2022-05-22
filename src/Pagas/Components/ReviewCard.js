import React from 'react';

const ReviewCard = ({review}) => {
    const {name, comment} = review;
    return (
        <div>
            <div className="cardlg:max-w-lg bg-primary shadow-xl rounded-lg">
                <div className="card-body">
                    <h2 className="card-title text-white">{name}</h2>
                    <p classNameName="text-accent">{comment}</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary">See details</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ReviewCard;