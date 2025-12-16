import { useQuery } from '@tanstack/react-query';
import React from 'react';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import { IoMdArrowDropdown } from 'react-icons/io';

const UserManagement = () => {
    const axiosSecure = useAxiosSecure();

    const { data: users = [] } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await axiosSecure.get(`/users`);
            return res.data;
        }
    });
    console.log(users);

    return (
        <div className='bg-base-300 min-h-screen'>
            <h2 className='text-2xl md:text-4xl font-bold text-center mb-10'>Manage Users ({users.length})</h2>

            <div className="overflow-x-auto overflow-y-visible">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>
                                #
                            </th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Actions</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.map((user, index) => <tr key={user._id}>
                            <th>
                                {index + 1}
                            </th>
                            <td>
                                <div className="flex items-center gap-3">
                                    <div className="avatar">
                                        <div className="mask mask-squircle h-12 w-12">
                                            <img src={user.photoURL} alt={user.displayName} />
                                        </div>
                                    </div>
                                    <div>
                                        <div className="font-bold">{user.displayName}</div>
                                    </div>
                                </div>
                            </td>
                            <td>
                                {user.email}
                                <br />
                                <span className="badge badge-ghost badge-sm">{user.role}</span>
                            </td>
                            <td>
                                <div className='flex gap-3'>
                                    <button className='btn btn-soft btn-success'>Make Admin</button>
                                    <button className='btn btn-soft btn-error'>Make User</button>
                                    <button className='btn btn-soft btn-info'>Make Creator</button>
                                </div>
                            </td>
                        </tr>)}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default UserManagement;