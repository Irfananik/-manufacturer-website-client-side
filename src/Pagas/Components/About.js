import React from 'react';
import { Link } from 'react-router-dom';

const About = () => {
    return (
        <div className="max-w-7xl mx-auto px-12">
            <div classNameName="container my-5 ">
                <h1 className="text-primary font-bold text-3xl text-center my-12 uppercase" style={{ fontWeight: 'bold' }}>About eBikeParts</h1>
                <div className="card my-5 container d-flex alig-items-center justify-content-center">
                    <div className="container d-flex alig-items-center justify-content-center my-5">
                        <img src={'https://i.ibb.co/hCjBf9R/about-ebike.jpg'} className="card-img-top w-25" alt="..." />
                    </div>
                    <div className="card-body">
                        <h4 className="card-title my-2" style={{ color: '#6C757D', fontWeight: 'bold' }}>eBikeParts</h4>
                        <p className="card-text" style={{ color: '#6C757D' }}>Traces of origin of Indian Motorcycle Co. date back to 1897 when George M. Hendee founded a bicycle manufacturing company called Hendee Manufacturing Company. The Indian nameplate was introduced in 1898 as it lent better identity in export market. During the 1910s Indian became the largest manufacturer of motorcycles in the world.Traces of origin of Indian Motorcycle Co. date back to 1897 when George M. Hendee founded a bicycle manufacturing company called Hendee Manufacturing Company. The Indian nameplate was introduced in 1898 as it lent better identity in export market. During the 1910s Indian became the largest manufacturer of motorcycles in the world.</p>
                        <Link style={{ textDecoration: 'none' }} to='/'>See More</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;