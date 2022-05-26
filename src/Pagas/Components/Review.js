import React, { useEffect, useState } from 'react';
import ReviewCard from './ReviewCard';

const Review = () => {
    const [reviews, setReviews] = useState([])

    useEffect(() => {
        fetch('https://stormy-brook-30276.herokuapp.com/reviews')
        .then(response => response.json())
        .then(data => setReviews(data))
    },[])
    return (
        <div className="max-w-7xl mx-auto px-12">
            <h2 className="text-primary font-bold text-3xl text-center my-12 uppercase">Collector's Review</h2>
            <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
                {
                    reviews.map(review => <ReviewCard key={review._id} review={review}/>)
                }
            </div>
        </div>
    );
};

export default Review;