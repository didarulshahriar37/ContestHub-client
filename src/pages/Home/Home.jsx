import React from 'react';
import Banner from './Banner/Banner';
import { useLoaderData } from 'react-router';
import PopularContests from './Popular Contests/PopularContests';
import Winners from './Winners/Winners';

const Home = () => {

    const contests = useLoaderData();

    return (
        <div className=''>
            <Banner></Banner>
            <PopularContests contests = {contests}></PopularContests>
            <Winners></Winners>
        </div>
    );
};

export default Home;