import React from 'react';

const Blog = () => {
    return (
        <div className="max-w-7xl mx-auto px-12 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 my-20">
            <div className="card w-96 bg-base-100 shadow-xl image-full">
                <figure><img src="https://th.bing.com/th/id/OIP.-ezOZ8XIz-lErCT15H-hxAHaEK?pid=ImgDet&rs=1" alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">How will you improve the performance of a React Application?</h2>
                    <p>01.Using Immutable Data Structures</p>
                    <p>02.Dependency optimization</p>
                    <p>03.Avoid Inline Function Definition in the Render Function.</p>
                    <p>04.Avoid using Index as Key for map.</p>
                    <p>05.Avoiding Props in Initial States.</p>
                    <p>06.Spreading props on DOM elements.</p>
                </div>
            </div>
            <div className="card w-96 bg-base-100 shadow-xl image-full">
                <figure><img src="https://th.bing.com/th/id/OIP.-ezOZ8XIz-lErCT15H-hxAHaEK?pid=ImgDet&rs=1" alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">How will you improve the performance of a React Application?</h2>
                    <p>01.Using Immutable Data Structures</p>
                    <p>02.Dependency optimization</p>
                    <p>03.Avoid Inline Function Definition in the Render Function.</p>
                    <p>04.Avoid using Index as Key for map.</p>
                    <p>05.Avoiding Props in Initial States.</p>
                    <p>06.Spreading props on DOM elements.</p>
                </div>
            </div>

        </div>
    );
};

export default Blog;