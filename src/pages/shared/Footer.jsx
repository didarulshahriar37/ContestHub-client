import React from 'react';
import { FaFacebook, FaLinkedin } from 'react-icons/fa';
import logo from "../../assets/logo.png";
import { Link } from 'react-router';

const Footer = () => {
    return (
        <footer className="footer footer-horizontal footer-center bg-base-200 text-base-content rounded p-10">
            <nav className="grid grid-flow-col gap-4">
                <Link to="/">
                    <div className='flex items-center gap-1 font-bold'>
                        <img className='w-12 h-12' src={logo} alt="" />
                        <p className='text-2xl'><span className='text-primary'>Contest</span>Hub</p>
                    </div>
                </Link>
            </nav>
            <nav>
                <div className="grid grid-flow-col gap-4">
                    <a href=''>
                        <FaFacebook className='w-8 h-8' />
                    </a>
                    <a href=''>
                        <FaLinkedin className='w-8 h-8' />
                    </a>
                </div>
            </nav>
            <aside>
                <p>Copyright © 2026 ContestHub</p>
            </aside>
        </footer>
    );
};

export default Footer;