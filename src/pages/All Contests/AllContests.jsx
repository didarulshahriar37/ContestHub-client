import React from 'react';
import { Link, useLoaderData } from 'react-router';
import ContestCard from '../../components/ContestCard/ContestCard';

const AllContests = () => {

    const contests = useLoaderData();

    return (
        <div className='pt-10 mt-10 mb-10'>
            <h2 className='text-2xl md:text-4xl font-bold text-center'>All Contests ({contests.length})</h2>
            <div className='grid grid-cols-1 md:grid-cols-3 mx-auto mt-5 gap-5 px-5 md:px-20 md:gap-10'>
                {
                    contests.map(contest => <ContestCard key={contest._id} contest={contest}></ContestCard>)
                }
            </div>
        </div>
    );
};

export default AllContests;