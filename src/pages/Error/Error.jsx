import React from 'react';
import animationData from "../../../public/404_Animation.json"
import Lottie from 'lottie-react';
import TextType from '../../components/TextType/TextType';
import { Link } from 'react-router';

const Error = () => {

    return (
        <div className='bg-base-300 min-h-screen'>
            <div className='flex flex-col gap-10 justify-center items-center min-h-screen'>
                <Lottie
                    animationData={animationData}
                    loop
                    autoplay
                    className="w-80 md:w-105"
                />
                <TextType
                className='font-semibold text-4xl'
                    text={["Oops !", "Page Not Found :')"]}
                    typingSpeed={75}
                    pauseDuration={1500}
                    showCursor={true}
                    cursorCharacter="|"
                />
                <Link className='btn btn-outline btn-info' to="/">Go Home</Link>
            </div>
        </div>
    );
};

export default Error;