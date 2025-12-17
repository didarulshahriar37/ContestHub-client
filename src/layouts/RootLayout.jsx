import React from 'react';
import Navbar from '../pages/shared/Navbar';
import { Outlet } from 'react-router';
import Footer from '../pages/shared/Footer';
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const RootLayout = () => {

    useEffect(() => {
        AOS.init({
            duration: 800,
            offset: 100
        });
    }, []);

    return (
        <div className='bg-base-300'>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default RootLayout;