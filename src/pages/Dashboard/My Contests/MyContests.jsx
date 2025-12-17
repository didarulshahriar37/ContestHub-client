import React from 'react';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';
import Loading from '../../shared/Loading';

const MyContests = () => {

    const axiosSecure = useAxiosSecure();

    const { data: contests = [], isLoading } = useQuery({
        queryKey: ['my-contests'],
        queryFn: async () => {
            const res = await axiosSecure.get('my-contests');
            return res.data;
        }
    });

    if (isLoading) {
        return <Loading></Loading>
    }

    return (
        <div>
            <h2 className='text-2xl md:text-4xl font-bold text-center mb-10'>My Contests</h2>

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
                                    <div className='flex gap-3'>
                                        {
                                            contest.approval_status === "approved" || contest.approval_status === "rejected" ? <><button disabled className='btn'>Edit</button>
                                                <button disabled className='btn'>Delete</button></> : <><button className='btn'>Edit</button>
                                                <button className='btn'>Delete</button></>
                                        }
                                    </div>
                                </td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyContests;