import React from 'react';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';
import Swal from 'sweetalert2';

const ApproveCreators = () => {
    const axiosSecure = useAxiosSecure();

    const { refetch, data: applications = [] } = useQuery({
        queryKey: ['creator-applications'],
        queryFn: async () => {
            const res = await axiosSecure.get(`/creator-applications`);
            return res.data;
        }
    });

    const handleApprove = async (application) => {
        try {
            const res = await axiosSecure.patch(`/creator-applications/${application._id}`, {
                status: 'approved'
            });
            Swal.fire({
                icon: 'success',
                title: 'Application Approved!',
                showConfirmButton: false,
                timer: 1500
            });
            refetch();
        } catch (err) {
            Swal.fire({
                icon: 'error',
                title: 'Approval Failed',
                text: err.response?.data?.message || err.message
            });
        }
    };

    const handleReject = async (application) => {
        try {
            const res = await axiosSecure.patch(`/creator-applications/${application._id}`, {
                status: 'rejected'
            });
            Swal.fire({
                icon: 'success',
                title: 'Application Rejected!',
                showConfirmButton: false,
                timer: 1500
            });
            refetch();
        } catch (err) {
            Swal.fire({
                icon: 'error',
                title: 'Rejection Failed',
                text: err.response?.data?.message || err.message
            });
        }
    };

    return (
        <div className='bg-base-300 min-h-screen'>
            <h2 className='md:text-4xl text-2xl font-bold text-center mb-10'>Creator Requests</h2>
            <div className="overflow-x-auto">
                <table className="table table-zebra">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Portfolio</th>
                            <th>Bio</th>
                            <th>Approval Status</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {applications.map((app, index) => (
                            <tr key={app._id}>
                                <th>{index + 1}</th>
                                <td className='font-bold'>{app.fullName}</td>
                                <td className='font-semibold'>{app.email}</td>
                                <td>{app.portfolioURL || '—'}</td>
                                <td>{app.bio}</td>
                                <td className={
                                    app.status === "approved"
                                        ? "text-green-500"
                                        : app.status === "rejected"
                                            ? "text-red-500"
                                            : "text-blue-500"
                                }>
                                    {app.status}
                                </td>
                                <td>
                                    {app.status === "pending" ? (
                                        <div className='flex gap-2'>
                                            <button onClick={() => handleApprove(app)} className='btn btn-success'>Approve</button>
                                            <button onClick={() => handleReject(app)} className='btn btn-error'>Reject</button>
                                        </div>
                                    ) : (
                                        <div className='flex gap-2'>
                                            <button disabled className='btn btn-success'>Approve</button>
                                            <button disabled className='btn btn-error'>Reject</button>
                                        </div>
                                    )}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ApproveCreators;