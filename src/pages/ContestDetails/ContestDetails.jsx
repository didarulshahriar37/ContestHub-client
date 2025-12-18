import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router';
import TextType from '../../components/TextType/TextType';

const ContestDetails = () => {

    const data = useLoaderData();
    const { id } = useParams();
    const [isEnded, setIsEnded] = useState(false);

    const contestData = data.find(contest => contest._id === id);

    const [timeLeft, setTimeLeft] = useState({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0
    });

    useEffect(() => {
        if (!contestData?.deadline) return;

        const targetDate = new Date(contestData.deadline).getTime();

        const interval = setInterval(() => {
            const now = new Date().getTime();
            const distance = targetDate - now;

            if (distance <= 0) {
                clearInterval(interval);
                setIsEnded(true);
                setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
                return;
            }

            setTimeLeft({
                days: Math.floor(distance / (1000 * 60 * 60 * 24)),
                hours: Math.floor((distance / (1000 * 60 * 60)) % 24),
                minutes: Math.floor((distance / (1000 * 60)) % 60),
                seconds: Math.floor((distance / 1000) % 60)
            });
        }, 1000);

        return () => clearInterval(interval);
    }, [contestData]);


    return (
        <div className='pt-25 md:px-20 px-5'>
            <div className='text-center'>
                <h2 className='md:text-4xl text-3xl font-bold mb-10'>{contestData.contest_name}</h2>
                <img className='md:h-130 h-50 w-full mx-auto mb-10 rounded-2xl shadow-xl' src={contestData.image} alt="" />
            </div>
            <div>
                <p className='text-2xl'><span className='font-bold'>Participants:</span> {contestData.participants_count}</p>
                <p className='text-2xl font-bold mt-5'>Description</p>
                <p className='text-2xl'>{contestData.contest_description}</p>
                <p className='text-2xl font-bold mt-5'>Task Details</p>
                <p className='text-2xl'>{contestData.task_details}</p>
                <p className='text-2xl mt-5'><span className='font-bold'>Prize Money: $</span>{contestData.prize_money}</p>
                <p className='text-2xl mt-5'><span className='font-bold'>Entry Fee: $ </span>{contestData.entry_price}</p>
            </div>
            <div className='flex justify-center mt-10'>
                {/* For TSX uncomment the commented types below */}
                {
                    isEnded ? <><p className='text-3xl text-red-500 font-bold'>Contest Ended</p></> : <>
                        <div className="grid grid-flow-col gap-5 text-center auto-cols-max">
                            <div className="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
                                <span className="countdown font-mono text-5xl">
                                    <span style={{ "--value": timeLeft.days } /* as React.CSSProperties */}></span>
                                </span>
                                days
                            </div>
                            <div className="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
                                <span className="countdown font-mono text-5xl">
                                    <span style={{ "--value": timeLeft.hours } /* as React.CSSProperties */}></span>
                                </span>
                                hours
                            </div>
                            <div className="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
                                <span className="countdown font-mono text-5xl">
                                    <span style={{ "--value": timeLeft.minutes } /* as React.CSSProperties */}></span>
                                </span>
                                min
                            </div>
                            <div className="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
                                <span className="countdown font-mono text-5xl">
                                    <span style={{ "--value": timeLeft.seconds } /* as React.CSSProperties */}></span>
                                </span>
                                sec
                            </div>
                        </div>
                    </>
                }
            </div>
            <div className=''>
                <div className='text-center mt-10 max-w-xl mx-auto'>
                    <TextType
                        className='font-semibold text-2xl'
                        text={['Pay and Join Now !']}
                        typingSpeed={75}
                        pauseDuration={1500}
                        showCursor={true}
                        cursorCharacter="|"
                    />
                </div>
            </div>
            <div className='text-center mt-5'>
                <button className='btn btn-outline btn-info'>Pay Now</button>
            </div>
            <div className='text-center mt-5 mb-5'>
                <button className='btn btn-outline btn-success'>Submit your task</button>
            </div>
        </div>
    );
};

export default ContestDetails;