import React from 'react';
import { useForm } from 'react-hook-form';
import useAuth from '../../../hooks/useAuth';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import Swal from 'sweetalert2';

import axios from 'axios';
import { useNavigate } from 'react-router';
import Loading from '../../shared/Loading';

const AddContests = () => {

    const { user } = useAuth();
    const axiosSecure = useAxiosSecure();
    const navigate = useNavigate();
    const { register, handleSubmit, formState: { errors } } = useForm();

    const handleContestSubmit = (data) => {

        const contestImg = data.image[0];
        const formData = new FormData();
        formData.append('image', contestImg);

        axios.post(`https://api.imgbb.com/1/upload?key=${import.meta.env.VITE_img_host_key}`, formData)
            .then(res => {
                const imageURL = res.data.data.url;

                const contestData = {
                    contest_name: data.contest_name,
                    image: imageURL,
                    participants_count: 0,
                    contest_description: data.contest_description,
                    task_details: data.task_details,
                    entry_price: Number(data.entry_price),
                    prize_money: Number(data.prize_money),
                    created_at: new Date(),
                    deadline: new Date(data.deadline),
                    contest_type: data.contest_type,
                    creator_name: data.creator_name,
                    creator_email: data.creator_email,
                    approval_status: "pending"
                };
                return axiosSecure.post('/my-contests', contestData);
            })
            .then(res => {
                if (res.data.insertedId) {
                    Swal.fire({
                        title: 'Contest waiting for admin approval!',
                        icon: 'success',
                    });
                    navigate("/dashboard/my-contests")
                }
            })
            .catch(error => {
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: `${error.message}`,
                });
            });
    };

    return (
        <div>
            <h2 className='text-2xl md:text-4xl font-bold text-center'>Add Contest</h2>

            <div className="mt-10 mx-auto card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                <div className="card-body">
                    <form onSubmit={handleSubmit(handleContestSubmit)} className="fieldset">
                        <fieldset className="fieldset">
                            {/* name field */}
                            <label className="label">Contest Name</label>
                            <input type="text"
                                {...register('contest_name', { required: true })}
                                className="input"
                                placeholder="Contest Name" />
                            {errors.contest_name?.type === 'required' && <p className='text-red-500'>Contest name is required.</p>}

                            {/* photo image field */}
                            <label className="label">Image</label>

                            <input type="file" accept='image/*' {...register('image', { required: true })} className="file-input" placeholder="Contest Image" />
                            {errors.image?.type === 'required' && <p className='text-red-500'>Image is required.</p>}

                            {/* description field */}
                            <label className="label">Descrition</label>
                            <input type="text"
                                {...register('contest_description', { required: true })}
                                className="input"
                                placeholder="Contest Description" />
                            {errors.contest_description?.type === 'required' && <p className='text-red-500'>A description is required.</p>}

                            {/* Price field */}
                            <label className="label">Entry fee</label>
                            <input type="number"
                                {...register('entry_price', { required: true })}
                                className="input"
                                placeholder="Entry Fee" />
                            {errors.entry_price?.type === 'required' && <p className='text-red-500'>Entry Fee is required.</p>}

                            {/* Prize money field */}
                            <label className="label">Prize Money</label>
                            <input type="number"
                                {...register('prize_money', { required: true })}
                                className="input"
                                placeholder="Prize Money" />
                            {errors.prize_money?.type === 'required' && <p className='text-red-500'>Prize money is required.</p>}

                            {/* Task field */}
                            <label className="label">Task Instruction</label>
                            <input type="text"
                                {...register('task_instruction', { required: true })}
                                className="input"
                                placeholder="Task Instruction" />
                            {errors.task_instruction?.type === 'required' && <p className='text-red-500'>Task Instruction is required.</p>}

                            {/* Type field */}
                            <label className="label">Contest Type</label>
                            <input type="text"
                                {...register('contest_type', { required: true })}
                                className="input"
                                placeholder="Contest Type" />
                            {errors.contest_type?.type === 'required' && <p className='text-red-500'>Type is required.</p>}
                            
                            {/* Name field */}
                            <label className="label">Your Name</label>
                            <input type="text"
                                {...register('creator_name', { required: true })}
                                className="input"
                                placeholder="Your Name" defaultValue={user.displayName} readOnly/>
                            
                            {/* Email field */}
                            <label className="label">Your Email</label>
                            <input type="text"
                                {...register('creator_email', { required: true })}
                                className="input"
                                placeholder="Your Email" defaultValue={user.email} readOnly/>

                            {/* Deadline Picker */}
                            <label className="label">Set Deadline</label>
                            <input
                                type="datetime-local"
                                {...register('deadline', { required: true })}
                                className="input"
                            />
                            {errors.deadline && (
                                <p className="text-red-500">Deadline is required</p>
                            )}

                            <button className="btn btn-neutral mt-4">Submit</button>
                        </fieldset>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddContests;