import React from 'react';
import Banner from './Components/Banner';
import BusinessSummary from './Components/BusinessSummary';
import Parts from './Components/Parts';
import Review from './Components/Review';

const Home = () => {
    return (
        <div>
            <Banner/>
            <Parts/>
            <BusinessSummary/>
            <Review/>
        </div>
    );
};

export default Home;