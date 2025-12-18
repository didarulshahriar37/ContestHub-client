import React, { useContext } from 'react';
import logo from "../../assets/logo.png";
import { Link, NavLink } from 'react-router';
import { FaMoon, FaUser } from 'react-icons/fa';
import { FiSun } from "react-icons/fi";
import { IoMdArrowDropdown } from 'react-icons/io';
import { AuthContext } from '../../contexts/AuthContext';
import Swal from 'sweetalert2';
import useTheme from '../../hooks/useTheme';

const Navbar = () => {

    const { user, logOut } = useContext(AuthContext);
    const { theme, toggleTheme } = useTheme();

    const handleSignOut = (e) => {
        e.preventDefault();
        logOut()
            .then(() => {
                Swal.fire({
                    title: "Logged Out successfully",
                    icon: "success",
                });
            })
            .catch(error => {
                Swal.fire({
                    icon: "error",
                    title: "Oops...",
                    text: `${error.message}`,
                });
            })
    }

    const lists = <>
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/all-contests">All Contests</NavLink></li>
        <li><NavLink to="/about-us">About Us</NavLink></li>
        <li><NavLink to="/contact">Contact</NavLink></li>
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
                <Link to='/' className="flex gap-1 items-center">
                    <img className='w-12 h-12' src={logo} alt="ContestHub Logo" />
                    <p className='text-xl font-bold'><span className='text-sky-700'>Contest</span>Hub</p>
                </Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {lists}
                </ul>
            </div>
            <div className="navbar-end">
                <div className='flex items-center gap-2'>
                    <button
                        onClick={toggleTheme}
                        className="btn btn-circle btn-ghost"
                        aria-label="Toggle Theme"
                    >
                        {theme === "light" ? <FaMoon /> : <FiSun />}
                    </button>
                    {
                        user ? <>
                            <div className="dropdown dropdown-end">
                                <img tabIndex={0} className='w-12 h-12 rounded-full hover:cursor-pointer object-cover' role='button' src={user.photoURL} alt={user.displayName} />
                                <ul tabIndex="-1" className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm space-y-2">
                                    <li><p>{user.displayName}</p></li>
                                    <li><Link to="/dashboard" className='btn btn-outline btn-primary'>Dashboard</Link></li>
                                    <li><button onClick={handleSignOut} className='btn btn-outline btn-error'>Logout</button></li>
                                </ul>
                            </div></> : ""

                    }
                    {
                        user ? "" : <div className='flex items-center gap-2'>
                            <div className="dropdown dropdown-end">
                                <div tabIndex={0} role="button" className="btn btn-ghost rounded-full"><FaUser className='w-5 h-5' /><IoMdArrowDropdown /></div>
                                <ul tabIndex="-1" className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
                                    <li><Link to="/auth/login">Login</Link></li>
                                    <li><Link to="/auth/register">Register</Link></li>
                                </ul>
                            </div>
                        </div>
                    }
                </div>
            </div>
        </div>
    );
};

export default Navbar;