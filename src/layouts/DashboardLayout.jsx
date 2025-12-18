import React from 'react';
import useTheme from '../hooks/useTheme';
import {  FaMoon, FaUserPlus, FaUsers } from 'react-icons/fa';
import { MdAssignmentAdd, MdManageSearch } from "react-icons/md";
import { IoCheckmarkDoneCircle } from "react-icons/io5";
import { LuTableOfContents } from "react-icons/lu";
import { CgProfile } from "react-icons/cg";
import { FiSun } from 'react-icons/fi';
import logo from "../assets/logo.png";
import { Link, NavLink, Outlet } from 'react-router';
import useRole from '../hooks/useRole';
import Loading from '../pages/shared/Loading';
import { IoMdTrophy } from 'react-icons/io';

const DashboardLayout = () => {

    const { theme, toggleTheme } = useTheme();
    const { role, roleLoading } = useRole();

    console.log(role)

    if(roleLoading){
        return <Loading></Loading>
    }

    return (
        <div className='bg-base-300'>
            <div className="drawer lg:drawer-open">
                <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content">
                    {/* Navbar */}
                    <nav className="navbar w-full bg-base-100 flex justify-between shadow-md">
                        <div className='flex gap-1 items-center'>
                            <label htmlFor="my-drawer-4" aria-label="open sidebar" className="btn btn-square btn-ghost">
                                {/* Sidebar toggle icon */}
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" strokeLinejoin="round" strokeLinecap="round" strokeWidth="2" fill="none" stroke="currentColor" className="my-1.5 inline-block size-5"><path d="M4 4m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z"></path><path d="M9 4v16"></path><path d="M14 10l2 2l-2 2"></path></svg>
                            </label>
                            <Link to="/" className="px-4 flex gap-2 items-center">
                                <img className='w-12 h-12' src={logo} alt="" />
                                <p className='text-xl font-bold'><span className='text-sky-700'>Contest</span>Hub</p>
                            </Link>
                        </div>
                        <div className='mr-10'>
                            <button
                                onClick={toggleTheme}
                                className="btn btn-circle btn-ghost"
                                aria-label="Toggle Theme"
                            >
                                {theme === "light" ? <FaMoon /> : <FiSun />}
                            </button>
                        </div>
                    </nav>
                    {/* Page content here */}
                    <div className="p-4">
                        <Outlet></Outlet>
                    </div>
                </div>
                <div className="drawer-side is-drawer-close:overflow-visible shadow-md">
                    <label htmlFor="my-drawer-4" aria-label="close sidebar" className="drawer-overlay"></label>
                    <div className="flex min-h-full flex-col items-start bg-base-200 is-drawer-close:w-14 is-drawer-open:w-64 shadow-xl">
                        {/* Sidebar content here */}
                        <ul className="menu w-full grow space-y-2">
                            {/* List item */}
                            <li>
                                <Link to="/dashboard" className="is-drawer-close:tooltip is-drawer-close:tooltip-right" data-tip="Homepage">
                                    {/* Home icon */}
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" strokeLinejoin="round" strokeLinecap="round" strokeWidth="2" fill="none" stroke="currentColor" className="my-1.5 inline-block w-5 h-5"><path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8"></path><path d="M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path></svg>
                                    <span className="is-drawer-close:hidden">Homepage</span>
                                </Link>
                            </li>

                            {/* List item */}
                            {
                                role === 'admin' && <>
                                    <li>
                                        <NavLink to="/dashboard/manage-users" className="is-drawer-close:tooltip is-drawer-close:tooltip-right" data-tip="Users Management">
                                            <FaUsers className='w-5 h-5' />
                                            <span className="is-drawer-close:hidden">Users Management</span>
                                        </NavLink>
                                    </li>
                                    <li>
                                        <NavLink to="/dashboard/approve-creators" className="is-drawer-close:tooltip is-drawer-close:tooltip-right" data-tip="Approve Creators">
                                            <FaUserPlus className='w-5 h-5'/>
                                            <span className="is-drawer-close:hidden">Approve Creators</span>
                                        </NavLink>
                                    </li>
                                    <li>
                                        <NavLink to="/dashboard/manage-contests" className="is-drawer-close:tooltip is-drawer-close:tooltip-right" data-tip="Manage Contests">
                                            <MdManageSearch className='w-5 h-5'/>
                                            <span className="is-drawer-close:hidden">Manage Contests</span>
                                        </NavLink>
                                    </li>
                                </>
                            }
                            
                            {
                                role === 'creator' && <>
                                    <li>
                                        <NavLink to="/dashboard/add-contest" className="is-drawer-close:tooltip is-drawer-close:tooltip-right" data-tip="Add Contest">
                                            <MdAssignmentAdd className='w-5 h-5' />
                                            <span className="is-drawer-close:hidden">Add Contest</span>
                                        </NavLink>
                                    </li>
                                    <li>
                                        <NavLink to="/dashboard/my-contests" className="is-drawer-close:tooltip is-drawer-close:tooltip-right" data-tip="My Contests">
                                            <LuTableOfContents className='w-5 h-5'/>
                                            <span className="is-drawer-close:hidden">My Contests</span>
                                        </NavLink>
                                    </li>
                                </>
                            }
                            
                            {
                                role === 'user' && <>
                                    <li>
                                        <NavLink to="/dashboard/participated-contests" className="is-drawer-close:tooltip is-drawer-close:tooltip-right" data-tip="Participated Contests">
                                            <IoCheckmarkDoneCircle className='w-5 h-5' />
                                            <span className="is-drawer-close:hidden">Participated Contests</span>
                                        </NavLink>
                                    </li>
                                    <li>
                                        <NavLink to="/dashboard/winning-contests" className="is-drawer-close:tooltip is-drawer-close:tooltip-right" data-tip="Winning Contests">
                                            <IoMdTrophy className='w-5 h-5'/>
                                            <span className="is-drawer-close:hidden">Winning Contests</span>
                                        </NavLink>
                                    </li>
                                    <li>
                                        <NavLink to="/dashboard/my-profile" className="is-drawer-close:tooltip is-drawer-close:tooltip-right" data-tip="My Profile">
                                            <CgProfile className='w-5 h-5'/>
                                            <span className="is-drawer-close:hidden">My Profile</span>
                                        </NavLink>
                                    </li>
                                </>
                            }
                            
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DashboardLayout;