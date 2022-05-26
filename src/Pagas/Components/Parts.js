import React, { useEffect, useState } from 'react';
import PartsCard from './PartsCard';

const Parts = () => {
    const [parts, setParts] = useState([])

    useEffect(() => {
        fetch('http://localhost:5000/parts')
            .then(response => response.json())
            .then(data => setParts(data))
    }, [])
    return (
        <div className="max-w-7xl mx-auto px-12">
            <h2 className="text-primary font-bold text-3xl text-center my-12">PARTS DESPLAY</h2>
            <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
                {
                    parts.map(p => <PartsCard key={p._id} p={p}/>)
                }
            </div>
        </div>
    );
};

export default Parts;