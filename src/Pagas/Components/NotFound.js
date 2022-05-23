import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <div className="flex h-screen justify-center items-center my-20">
            <div class="hero min-h-screen" style={{backgroundImage: "url(https://th.bing.com/th/id/R.ee6cd38e5aa09f70a83ffc763931e0ca?rik=o2TYoFvyzbEQig&riu=http%3a%2f%2fmodernserviceweapons.com%2fwp-content%2fuploads%2f2013%2f03%2fquotes-error-404-not-found-HD-Wallpapers.png&ehk=xh%2f0%2feARjXdZVKWjefzwE6IoJ8QeYnUJ5GruEtkXziY%3d&risl=&pid=ImgRaw&r=0)"}}>
                <div class="hero-overlay bg-opacity-60"></div>
                <div class="hero-content text-center text-neutral-content">
                    <div class="max-w-md">
                        <Link to={'/'}><button class="btn btn-outline btn-success mt-32">Back to home</button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NotFound;