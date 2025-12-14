import React from 'react';
import logo from "../../assets/logo.png";
import { Link, NavLink } from 'react-router';
import { FaUser } from 'react-icons/fa';
import { IoMdArrowDropdown } from 'react-icons/io';

const Navbar = () => {

    const lists = <>
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink>All Contests</NavLink></li>
        <li><NavLink>About Us</NavLink></li>
        <li><NavLink>Contact</NavLink></li>
    </>

    return (
        <div className="navbar opacity-98 shadow-sm md:px-20 fixed top-0 z-50 bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                    </div>
                    <ul
                        tabIndex="-1"
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                        {lists}
                    </ul>
                </div>
                <Link to='/' className="flex gap-2 items-center">
                    <img className='w-10 h-8' src={logo} alt="ContestHub Logo" />
                    <p className='text-xl font-bold'>ContestHub</p>
                </Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {lists}
                </ul>
            </div>
            <div className="navbar-end">
                <div className='flex items-center gap-2'>
                    <FaUser className='w-5 h-5' />
                    <div className='flex items-center gap-2'>
                        <div className="dropdown dropdown-end">
                            <div tabIndex={0} role="button" className="btn btn-ghost m-1">User <IoMdArrowDropdown /></div>
                            <ul tabIndex="-1" className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
                                <li><a>Login</a></li>
                                <li><a>Register</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;