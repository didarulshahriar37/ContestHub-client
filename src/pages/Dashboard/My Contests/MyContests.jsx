import React, { useState } from 'react';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';
import Loading from '../../shared/Loading';
import Swal from 'sweetalert2';

const MyContests = () => {

    const axiosSecure = useAxiosSecure();
    const [selectedContest, setSelectedContest] = useState(null);

    const { refetch, data: contests = [], isLoading } = useQuery({
        queryKey: ['my-contests'],
        queryFn: async () => {
            const res = await axiosSecure.get('/my-contests');
            return res.data;
        }
    });

    if (isLoading) return <Loading />;

    const handleEdit = (contest) => {
        setSelectedContest(contest);
        document.getElementById('edit_modal').showModal();
    };

    const handleUpdate = async (e) => {
        e.preventDefault();

        const form = e.target;

        const updatedContest = {
            contest_name: form.contest_name.value,
            imageURL: form.image.value,
            contest_description: form.contest_description.value,
            task_details: form.task_details.value,
            entry_price: form.entry_price.value,
            prize_money: form.prize_money.value,
            contest_type: form.contest_type.value
        };

        const res = await axiosSecure.patch(
            `/my-contests/${selectedContest._id}`,
            updatedContest
        );

        if (res.data.modifiedCount > 0) {
            refetch();
            document.getElementById('edit_modal').close();
            Swal.fire('Updated!', 'Contest updated successfully.', 'success');
        }
    };

    const handleDelete = (contest) => {
        Swal.fire({
            title: "Are you sure?",
            icon: "warning",
            showCancelButton: true,
            confirmButtonText: "Yes, Delete!"
        }).then((result) => {
            if (result.isConfirmed) {
                axiosSecure.delete(`/my-contests/${contest._id}`)
                    .then(res => {
                        if (res.data.deletedCount > 0) {
                            refetch();
                            Swal.fire('Deleted!', 'Contest removed.', 'success');
                        }
                    });
            }
        });
    };

    return (
        <div>
            <h2 className='text-2xl md:text-4xl font-bold text-center mb-10'>
                My Contests
            </h2>

            <div className="overflow-x-auto">
                <table className="table table-zebra">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Title</th>
                            <th>Creator</th>
                            <th>Type</th>
                            <th>Status</th>
                            <th>Actions</th>
                        </tr>
                    </thead>

                    <tbody>
                        {contests.map((contest, index) => {
                            return (
                                <tr key={contest._id}>
                                    <th>{index + 1}</th>
                                    <td className="font-bold">{contest.contest_name}</td>
                                    <td>
                                        {contest.creator_name}<br />
                                        {contest.creator_email}
                                    </td>
                                    <td>{contest.contest_type}</td>
                                    <td className={
                                        contest.approval_status === "approved"
                                            ? "text-green-500"
                                            : contest.approval_status === "rejected"
                                                ? "text-red-500"
                                                : "text-blue-500"
                                    }>
                                        {contest.approval_status}
                                    </td>
                                    <td>
                                        {
                                            contest.approval_status === "approved" || contest.approval_status === "rejected" ? <><div className="flex gap-3">
                                                <button
                                                    disabled
                                                    className="btn btn-soft btn-primary"
                                                >
                                                    Edit
                                                </button>

                                                <button
                                                    disabled
                                                    className="btn btn-soft btn-error"
                                                >
                                                    Delete
                                                </button>

                                                {
                                                    contest.approval_status === "approved" ? <button
                                                    className="btn btn-soft btn-error"
                                                >
                                                    See Submissions
                                                </button> : ""
                                                }
                                            </div></> : <div className="flex gap-3">
                                                <button
                                                    onClick={() => handleEdit(contest)}
                                                    className="btn btn-soft btn-primary"
                                                >
                                                    Edit
                                                </button>

                                                <button
                                                    onClick={() => handleDelete(contest)}
                                                    className="btn btn-soft btn-error"
                                                >
                                                    Delete
                                                </button>
                                            </div>
                                        }
                                    </td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </div>

            <dialog id="edit_modal" className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <h3 className="font-bold text-lg mb-4">Edit Contest</h3>

                    {selectedContest && (
                        <form onSubmit={handleUpdate} className="space-y-3">
                            <label className='label'>Contest Name</label>
                            <input
                                name="contest_name"
                                defaultValue={selectedContest.contest_name}
                                className="input input-bordered w-full"
                                required
                            />
                            <label className='label'>Image URL</label>
                            <input
                                name="image"
                                defaultValue={selectedContest.image}
                                className="input input-bordered w-full"
                                required
                            />
                            <label className='label'>Contest Description</label>
                            <input
                                name="contest_description"
                                defaultValue={selectedContest.contest_description}
                                className="input input-bordered w-full"
                                required
                            />
                            <label className='label'>Task Details</label>
                            <input
                                name="task_details"
                                defaultValue={selectedContest.task_details}
                                className="input input-bordered w-full"
                                required
                            />
                            <label className='label'>Entry Fee</label>
                            <input
                                type="number"
                                name="entry_price"
                                defaultValue={selectedContest.entry_price}
                                className="input input-bordered w-full"
                                required
                            />
                            <label className='label'>Price Money</label>
                            <input
                                type="number"
                                name="prize_money"
                                defaultValue={selectedContest.prize_money}
                                className="input input-bordered w-full"
                                required
                            />
                            <label className='label'>Contest Type</label>
                            <input
                                name="contest_type"
                                defaultValue={selectedContest.contest_type}
                                className="input input-bordered w-full"
                                required
                            />

                            <div className="modal-action">
                                <button type="submit" className="btn btn-primary">
                                    Update
                                </button>
                                <button
                                    type="button"
                                    className="btn"
                                    onClick={() => document.getElementById('edit_modal').close()}
                                >
                                    Cancel
                                </button>
                            </div>
                        </form>
                    )}
                </div>
            </dialog>
        </div>
    );
};

export default MyContests;
