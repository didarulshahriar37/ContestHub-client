import React from 'react';
import ContestCard from '../../../components/ContestCard/ContestCard';
import { Link } from 'react-router';

const PopularContests = ({contests}) => {

    console.log(contests)

    return (
        <div className='mt-15 mb-15'>
            <h2 className='text-2xl md:text-4xl font-bold text-center'>Popular Contests</h2>
            <div className='grid grid-cols-1 md:grid-cols-3 mx-auto mt-5 gap-5 px-5 md:px-20 md:gap-10'>
                {
                    contests.map(contest => <ContestCard key={contest._id} contest={contest}></ContestCard>)
                }
            </div>
            <div className='text-center mt-10'>
                <Link to="/all-contests" className='btn btn-outline btn-primary'>Show All</Link>
            </div>
        </div>
    );
};

export default PopularContests;