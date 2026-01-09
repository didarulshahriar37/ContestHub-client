import { Link, useLocation, useNavigate } from 'react-router';
import { useForm } from 'react-hook-form';
import useAuth from '../../hooks/useAuth';
import SocialLogin from './SocialLogin';
import axios from 'axios';
import useAxiosSecure from '../../hooks/useAxiosSecure';
import Swal from 'sweetalert2';
import { useState } from 'react';
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
import registration from "../../../public/register.json";
import Lottie from 'lottie-react';

const Register = () => {

    const { register, handleSubmit, formState: { errors } } = useForm();
    const { registerUser, updateUserProfile } = useAuth();
    const [showPassword, setShowPassword] = useState(false);
    const location = useLocation();
    const navigate = useNavigate();
    const axiosSecure = useAxiosSecure();

    const handleRegistration = (data) => {

        const profileImg = data.photo[0];

        registerUser(data.email, data.password)
            .then(() => {

                const formData = new FormData();
                formData.append('image', profileImg);

                axios.post(`https://api.imgbb.com/1/upload?key=${import.meta.env.VITE_img_host_key}`, formData)
                    .then(res => {
                        const photoURL = res.data.data.url;

                        const userInfo = {
                            email: data.email,
                            displayName: data.name,
                            photoURL: photoURL,
                            createdAt: new Date()
                        }

                        axiosSecure.post("/users", userInfo)
                            .then(res => {
                                if (res.data.insertedId) {
                                    Swal.fire({
                                        title: "User created successfully",
                                        icon: "success",
                                    });
                                }
                            })

                        const userProfile = {
                            displayName: data.name,
                            photoURL: photoURL
                        }
                        updateUserProfile(userProfile)
                            .then(() => {
                                navigate(location?.state || "/");
                            })
                            .catch((error) => {
                                Swal.fire({
                                    icon: "error",
                                    title: "Oops...",
                                    text: `${error.message}`,
                                });
                            })
                    })
            })
            .catch((error) => {
                Swal.fire({
                    icon: "error",
                    title: "Oops...",
                    text: `${error.message}`,
                });
            })
    }

    const handleTogglePassword = (event) => {
        event.preventDefault();
        setShowPassword(!showPassword);
    }

    return (
        <div className='pt-20 md:pb-20 bg-base-300 min-h-screen'>
            <title>Create a new account</title>
            <div className='mt-10 text-center text-2xl md:text-4xl font-bold'>
                <h2>CREATE A NEW ACCOUNT !</h2>
            </div>
            <div className='md:px-20 px-5 flex flex-col-reverse gap-5 md:flex-row md:gap-50 items-center'>
                <div className='md:ml-25'>
                    <Lottie
                        animationData={registration}
                        loop
                        autoplay
                        className="w-80 md:w-105 mb-10"
                    />
                </div>
                <div className="mt-10 mx-auto card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                    <div className="card-body">
                        <form onSubmit={handleSubmit(handleRegistration)} className="fieldset">
                            <fieldset className="fieldset">
                                {/* name field */}
                                <label className="label">Name</label>
                                <input type="text"
                                    {...register('name', { required: true })}
                                    className="input"
                                    placeholder="Your Name" />
                                {errors.name?.type === 'required' && <p className='text-red-500'>Name is required.</p>}

                                {/* photo image field */}
                                <label className="label">Photo</label>

                                <input type="file" accept='image/*' {...register('photo', { required: true })} className="file-input" placeholder="Your Photo" />

                                {errors.name?.type === 'required' && <p className='text-red-500'>Photo is required.</p>}

                                {/* email field */}
                                <label className="label">Email</label>
                                <input type="email" {...register('email', { required: true })} className="input" placeholder="Email" />
                                {errors.email?.type === 'required' && <p className='text-red-500'>Email is required.</p>}

                                {/* password */}
                                <label className="label">Password</label>
                                <input type={showPassword ? "text" : "password"} {...register('password', {
                                    required: true,
                                    minLength: 6,
                                    pattern: /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[^A-Za-z0-9]).+$/
                                })} className="input" placeholder="Password" />
                                <div onClick={handleTogglePassword} className='hover:cursor-pointer text-xl top-69 right-15 absolute z-50'>
                                    {
                                        showPassword ? <FaEyeSlash></FaEyeSlash> : <FaEye></FaEye>
                                    }
                                </div>
                                {
                                    errors.password?.type === 'required' && <p className='text-red-500'>Password is required.</p>
                                }
                                {
                                    errors.password?.type === 'minLength' && <p className='text-red-500'>
                                        Password must be 6 characters or longer.
                                    </p>
                                }
                                {
                                    errors.password?.type === 'pattern' && <p className='text-red-500'>Password must have at least one uppercase, at least one lowercase, at least one number, and at least one special characters.</p>
                                }
                                <button className="btn btn-success mt-4">Register</button>
                                <p className='mt-2 mb-2 text-xl font-semibold text-center'>Or</p>
                                <SocialLogin></SocialLogin>
                            </fieldset>
                            <p className='mt-5 font-bold text-center'>Already have an account? <span className='text-blue-600 hover:underline'><Link state={location.state} to="/auth/login">Login</Link></span> </p>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;