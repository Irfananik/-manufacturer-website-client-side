import React from 'react';
import Banner from './Components/Banner';
import BusinessSummary from './Components/BusinessSummary';
import Parts from './Components/Parts';

const Home = () => {
    return (
        <div>
            <Banner/>
            <Parts/>
            <BusinessSummary/>
        </div>
    );
};

export default Home;