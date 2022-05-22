import React from 'react';
import Banner from './Components/Banner';
import BusinessSummary from './Components/BusinessSummary';
import ContactUs from './Components/ContactUs';
import Parts from './Components/Parts';
import Review from './Components/Review';

const Home = () => {
    return (
        <div>
            <Banner/>
            <Parts/>
            <BusinessSummary/>
            <Review/>
            <ContactUs/>
        </div>
    );
};

export default Home;