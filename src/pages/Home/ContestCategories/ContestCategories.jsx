import React, { useState, useEffect } from 'react';

const ContestCategories = () => {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        fetch("https://contest-hub-server-green.vercel.app/all-contests")
            .then(res => res.json())
            .then(data => setCategories(data))
    }, []);

    const uniqueTypes = [...new Set(categories.map(c => c.contest_type))];

    return (
        <div className='mt-20 mb-15 px-5'>
            <h2 className='text-2xl md:text-4xl font-bold text-center mb-10'>
                Available Categories
            </h2>

            <div className='flex flex-wrap justify-center gap-3 px-5 md:px-20'>
                {uniqueTypes.map(type => (
                    <div
                        key={type}
                        className='px-4 py-2 btn btn-primary btn-outline font-semibold rounded-full shadow-md hover:scale-105 transform transition duration-200 cursor-pointer'
                    >
                        {type}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ContestCategories;
