import React from 'react';
import { Link } from 'react-router-dom';

const MyPortfolio = () => {
    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <img src="https://i.ibb.co/MgQ28Zw/myportfolio.png" />
                    <div>
                        <h1 className="text-5xl font-bold">Golam Morshed</h1>
                        <h2 className="py-3 text-xl">Email: anik.cse10@gmail.com</h2>
                        <h2 className="py-2 text-xl">Educational background:</h2>
                        <p>University: Fareast International University, Banani, Dhaka <br />
                            Degree: Bsc in Computer Science & Engineering <br />
                            Duration: 2018 to 2022
                        </p>
                        <h2 className="py-2 text-xl">Skills:</h2>
                        <p>
                            Expertise: HTML5, CSS3, Bootstrap, JavaScript, ES6, ReactJs <br />
                            Familiar: NodeJs, ExpressJs, MongoDB, Firebase, Tailwind <br />
                            Tools: Netlify, Heroku, Git, VSCode
                        </p>
                        <button className="btn btn-primary my-3">My Resume</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MyPortfolio;