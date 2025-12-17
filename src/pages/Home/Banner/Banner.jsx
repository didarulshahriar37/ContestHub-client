import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import "./Banner.css";
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination } from 'swiper/modules';
import slide1 from "../../../assets/slide1.jpg";
import slide2 from "../../../assets/slide2.jpg";
import slide3 from "../../../assets/slide3.jpg";
import slide4 from "../../../assets/slide4.jpg";
import { Link } from 'react-router';

const Banner = () => {
    return (
        <div className='pt-16'>
            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                modules={[Autoplay, Pagination]}
                className="mySwiper h-75 md:h-158 shadow-md"
            >
                <SwiperSlide>
                    <div className='relative md:px-15 py-15 md:py-0 h-75 md:h-158 flex items-center text-white bg-center bg-cover'
                        style={{
                            backgroundImage: `url(${slide1})`
                        }}>
                        <div className='absolute inset-0 bg-linear-to-b  md:bg-linear-to-r from-black/70 to-black/1'>
                            <div className='space-y-4 md:ml-15 mt-3 md:mt-40 relative z-10 text-center md:text-start max-w-lg'>
                                <h3 className='flex justify-center md:justify-normal items-center font-bold gap-2 text-xl md:text-4xl'>Create. Compete. Win.</h3>
                                <p className='text-sm md:text-lg'>Join creative contests, showcase your talent, and earn rewards.</p>
                                <Link to="/all-contests" className='btn mt-5'>Explore Contests</Link>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='relative md:px-15 py-15 md:py-0 h-75 md:h-158 flex items-center text-white bg-center bg-cover'
                        style={{
                            backgroundImage: `url(${slide2})`
                        }}>
                        <div className='absolute inset-0 bg-linear-to-b  md:bg-linear-to-r from-black/70 to-black/1'>
                            <div className='space-y-4 md:ml-15 mt-3 md:mt-40 relative z-10 text-center md:text-start max-w-lg'>
                                <h3 className='flex justify-center md:justify-normal items-center font-bold gap-2 text-xl md:text-4xl'>Contests for Every Creator</h3>
                                <p className='text-sm md:text-lg'>Design, writing, business ideas, gaming reviews, and more — all in one place.</p>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='relative md:px-15 py-15 md:py-0 h-75 md:h-158 flex items-center text-white bg-center bg-cover'
                        style={{
                            backgroundImage: `url(${slide3})`
                        }}>
                        <div className='absolute inset-0 bg-linear-to-b  md:bg-linear-to-r from-black/70 to-black/1'>
                            <div className='space-y-4 px-2 md:ml-15 mt-3 md:mt-40 relative z-10 text-center md:text-start max-w-lg'>
                                <h3 className='flex justify-center md:justify-normal items-center font-bold gap-2 text-xl md:text-4xl'>Compete & Get Rewarded</h3>
                                <p className='text-sm md:text-lg'>Secure payments, fair judging, and real prizes for top performers.</p>
                                <button className='btn mt-5'>See Leaderboard</button>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='relative md:px-15 py-15 md:py-0 h-75 md:h-158 flex items-center text-white bg-center bg-cover'
                        style={{
                            backgroundImage: `url(${slide4})`
                        }}>
                        <div className='absolute inset-0 bg-linear-to-b  md:bg-linear-to-r from-black/70 to-black/1'>
                            <div className='space-y-4 px-2 md:ml-15 mt-3 md:mt-40 relative z-10 text-center md:text-start max-w-lg'>
                                <h3 className='flex justify-center md:justify-normal items-center font-bold gap-2 text-xl md:text-4xl'>Host Contests with Ease</h3>
                                <p className='text-sm md:text-lg'>Create contests, manage submissions, select winners — all from one dashboard.</p>
                                <button className='btn mt-5'>Be a creator</button>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default Banner;