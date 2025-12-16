import React from 'react';
import animationData from "../../../../public/Welcome_Animation.json";
import Lottie from 'lottie-react';
import TextType from '../../../components/TextType/TextType';
import useRole from '../../../hooks/useRole';

const HomePage = () => {

    const {role} = useRole();

    return (
        <div className="flex flex-col items-center justify-center bg-base-300">
            <Lottie
                animationData={animationData}
                loop
                autoplay
                className="w-72 md:w-105"
            />
            <TextType
                className='font-semibold text-4xl'
                text={[`What's Up, ${role} !`]}
                typingSpeed={75}
                pauseDuration={1500}
                showCursor={true}
                cursorCharacter="|"
            />
        </div>
    );
};

export default HomePage;