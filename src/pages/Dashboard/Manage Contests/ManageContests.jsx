import React from 'react';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import Swal from 'sweetalert2';
import { useQuery } from '@tanstack/react-query';
import { FaTrashAlt } from 'react-icons/fa';

const ManageContests = () => {

    const axiosSecure = useAxiosSecure();

    const { refetch, data: contests = [] } = useQuery({
        queryKey: ['manage-contests'],
        queryFn: async () => {
            const res = await axiosSecure.get(`/manage-contests`);
            return res.data;
        }
    });

    const handleApprove = contest => {
        Swal.fire({
            title: "Are you sure?",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, Approve !"
        }).then((result) => {
            if (result.isConfirmed) {
                const approval_status = { approval_status: 'approved' }
                axiosSecure.patch(`/manage-contests/${contest._id}/approval_status`, approval_status)
                    .then(res => {
                        if (res.data.modifiedCount) {
                            refetch();
                            Swal.fire({
                                title: `${contest.contest_name} is approved !`,
                                icon: "success",
                            });
                        }
                    })
            }
        });
    }

    const handleReject = contest => {
        Swal.fire({
            title: "Are you sure?",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, Reject !"
        }).then((result) => {
            if (result.isConfirmed) {
                const approval_status = { approval_status: 'rejected' }
                axiosSecure.patch(`/manage-contests/${contest._id}/approval_status`, approval_status)
                    .then(res => {
                        if (res.data.modifiedCount) {
                            refetch();
                            Swal.fire({
                                title: `${contest.contest_name} is rejected !`,
                                icon: "success",
                            });
                        }
                    })
            }
        });
    }

    const handleDelete = contest => {
        Swal.fire({
            title: "Are you sure?",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, Delete !"
        }).then((result) => {
            if (result.isConfirmed) {
                axiosSecure.delete(`/manage-contests/${contest._id}`)
                    .then(res => {
                        if (res.data.deletedCount) {
                            refetch();
                            Swal.fire({
                                title: `${contest.contest_name} is deleted !`,
                                icon: "success",
                            });
                        }
                    })
            }
        });
    }

    return (
        <div className='bg-base-300 min-h-screen'>
            <h2 className='md:text-4xl text-2xl font-bold text-center mb-10'>Manage Contests ({contests.length})</h2>

            <div className="overflow-x-auto">
                <table className="table table-zebra">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Title</th>
                            <th>Creator Name & Email</th>
                            <th>Type</th>
                            <th>Approval Status</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            contests.map((contest, index) => <tr>
                                <th>{index + 1}</th>
                                <td className='font-bold'>{contest.contest_name}</td>
                                <td className='font-semibold'>{contest.creator_name} <br /> {contest.creator_email}</td>
                                <td>{contest.contest_type}</td>
                                <td className={contest.approval_status === "approved" ? "text-green-500" : contest.approval_status === "rejected" ? "text-red-500" : "text-blue-500"}>{contest.approval_status}</td>
                                <td>
                                    {
                                        contest.approval_status === "approved" || contest.approval_status === "rejected" ? <div className='flex gap-2'>
                                            <button disabled onClick={() => handleApprove(contest)} className='btn'>Approve</button>
                                            <button disabled onClick={() => handleReject(contest)} className='btn'>Reject</button>
                                            <button onClick={() => handleDelete(contest)} className='btn text-red-500'><FaTrashAlt />
                                            </button>
                                        </div> : <div className='flex gap-2'>
                                            <button onClick={() => handleApprove(contest)} className='btn'>Approve</button>
                                            <button onClick={() => handleReject(contest)} className='btn'>Reject</button>
                                            <button onClick={() => handleDelete(contest)} className='btn text-red-500'><FaTrashAlt />
                                            </button>
                                        </div>
                                    }
                                </td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ManageContests;