import React, { useEffect, useState } from 'react';
import WinnerCard from '../../../components/WinnerCard/WinnerCard';

const Winners = () => {

    const [winners, setWinners] = useState([]);

    useEffect(() => {
        fetch("https://contest-hub-server-green.vercel.app/winners").then(res => res.json()).then(data => setWinners(data));
    }, [])


    return (
        <div className='mt-20 mb-15'>
            <h2 className='text-2xl md:text-4xl font-bold text-center mb-15'>Recent Winners</h2>
            <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 mx-auto mt-5 gap-5 px-5 md:px-20 md:gap-10'>
                {
                    winners.map(winner => <WinnerCard key={winner._id} winner={winner}></WinnerCard>)
                }
            </div>
        </div>
    );
};

export default Winners;