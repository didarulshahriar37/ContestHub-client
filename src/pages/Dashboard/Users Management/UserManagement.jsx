import { useQuery } from '@tanstack/react-query';
import React from 'react';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import { IoMdArrowDropdown } from 'react-icons/io';
import Swal from 'sweetalert2';

const UserManagement = () => {
    const axiosSecure = useAxiosSecure();

    const { refetch, data: users = [] } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await axiosSecure.get(`/users`);
            return res.data;
        }
    });

    const handleMakeAdmin = user => {
        Swal.fire({
            title: "Are you sure?",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, Make Admin !"
        }).then((result) => {
            if (result.isConfirmed) {
                const roleInfo = { role: 'admin' }
                axiosSecure.patch(`/users/${user._id}/role`, roleInfo)
                    .then(res => {
                        if (res.data.modifiedCount) {
                            refetch();
                            Swal.fire({
                                title: `${user.displayName} marked as Admin !`,
                                icon: "success",
                            });
                        }
                    })
            }
        });
    }

    const handleMakeUser = user => {
        Swal.fire({
            title: "Are you sure?",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, Make User !"
        }).then((result) => {
            if (result.isConfirmed) {
                const roleInfo = { role: 'user' }
                axiosSecure.patch(`/users/${user._id}/role`, roleInfo)
                    .then(res => {
                        if (res.data.modifiedCount) {
                            refetch();
                            Swal.fire({
                                title: `${user.displayName} marked as user !`,
                                icon: "success",
                            });
                        }
                    })
            }
        });
    }

    const handleMakeCreator = user => {
        Swal.fire({
            title: "Are you sure?",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, Make Creator !"
        }).then((result) => {
            if (result.isConfirmed) {
                const roleInfo = { role: 'creator' }
                axiosSecure.patch(`/users/${user._id}/role`, roleInfo)
                    .then(res => {
                        if (res.data.modifiedCount) {
                            refetch();
                            Swal.fire({
                                title: `${user.displayName} marked as creator !`,
                                icon: "success",
                            });
                        }
                    })
            }
        });
    }

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
                            <th>Role</th>
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
                            </td>
                            <td>
                                {user.role}
                            </td>
                            <td>
                                <div className='flex gap-3'>
                                    <button onClick={() => handleMakeAdmin(user)} className='btn btn-soft btn-success'>Make Admin</button>
                                    <button onClick={() => handleMakeUser(user)} className='btn btn-soft btn-error'>Make User</button>
                                    <button onClick={() => handleMakeCreator(user)} className='btn btn-soft btn-info'>Make Creator</button>
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