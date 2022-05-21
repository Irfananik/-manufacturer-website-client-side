import React from 'react';

const Banner = () => {
    return (
        <div>
            <div class="hero min-h-screen" style={{backgroundImage: "url(https://i.ibb.co/XYx601R/moto-cover.jpg)"}}>
                <div class="hero-overlay bg-opacity-60"></div>
                <div class="hero-content text-center text-neutral-content">
                    <div class="max-w-md">
                        <h1 class="mb-5 text-6xl font-bold">Hello there!</h1>
                        <p class="mb-5 text-xl">Welcome to our eBikeParts house. I wish it's your best place to buy bike parts from another place.</p>
                        <button class="btn btn-primary">See Parts</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;