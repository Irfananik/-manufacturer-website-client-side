import React from 'react';

const ReviewCard = ({ review }) => {
    const { userName, rating, comments } = review;
    return (
        <div>
            <div className="cardlg:max-w-lg bg-primary shadow-xl rounded-lg">
                <div className="card-body">
                    <h2 className="card-title text-white">{userName}</h2>
                    <p classNameName="text-accent">{comments}</p>
                    <p classNameName="text-accent">Rating: {rating}</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary">See details</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ReviewCard;