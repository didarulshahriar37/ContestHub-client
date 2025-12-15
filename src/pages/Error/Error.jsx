import React from 'react';
import animationData from "../../../public/404_Animation.json"
import Lottie from 'lottie-react';
import TextType from '../../components/TextType/TextType';
import { Link } from 'react-router';

const Error = () => {

    const customCss = `
    /* This is the key to the seamless animation.
      The @property rule tells the browser that '--angle' is a custom property
      of type <angle>. This allows the browser to smoothly interpolate it
      during animations, preventing the "jump" at the end of the loop.
    */
    @property --angle {
      syntax: '<angle>';
      initial-value: 0deg;
      inherits: false;
    }

    /* The keyframe animation simply transitions the --angle property
      from its start (0deg) to its end (360deg).
    */
    @keyframes shimmer-spin {
      to {
        --angle: 360deg;
      }
    }
  `;

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
                <div className="flex items-center justify-center font-sans">
                    <style>{customCss}</style>
                    <Link to="/" className="relative inline-flex items-center justify-center p-[1.5px] bg-gray-300 rounded-full overflow-hidden group">
                        <div
                            className="absolute inset-0"
                            style={{
                                background: 'conic-gradient(from var(--angle), transparent 25%, #06b6d4, transparent 50%)',
                                animation: 'shimmer-spin 2.5s linear infinite',
                            }}
                        />
                        <span className="relative z-10 inline-flex items-center justify-center w-full h-full px-8 py-3 bg-base-300 text-black rounded-full group-hover:bg-blue-400 hover:cursor-pointer transition-colors duration-500">
                            Go Home
                        </span>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Error;