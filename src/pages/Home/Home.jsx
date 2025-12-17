import React from 'react';
import Banner from './Banner/Banner';
import { useLoaderData } from 'react-router';
import PopularContests from './Popular Contests/PopularContests';

const Home = () => {

    const contests = useLoaderData();

    return (
        <div className=''>
            <Banner></Banner>
            <PopularContests contests = {contests}></PopularContests>
        </div>
    );
};

export default Home;