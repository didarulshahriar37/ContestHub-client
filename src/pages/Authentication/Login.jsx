import React from 'react';
import { useForm } from 'react-hook-form';
import { Link, useLocation, useNavigate } from 'react-router';
import useAuth from '../../hooks/useAuth';
import SocialLogin from './SocialLogin';
import Swal from 'sweetalert2';
import Lottie from 'lottie-react';
import login from "../../../public/Login.json";

const Login = () => {

    const { register, handleSubmit, formState: { errors } } = useForm();
    const { signInUser } = useAuth();
    const location = useLocation();
    const navigate = useNavigate();

    const handleLogin = (data) => {
        signInUser(data.email, data.password)
            .then(() => {
                Swal.fire({
                    title: "Logged In successfully",
                    icon: "success",
                });
                navigate(location?.state || '/');
            })
            .catch((error) => {
                Swal.fire({
                    icon: "error",
                    title: "Oops...",
                    text: `${error.message}`,
                });
            })
    }

    return (
        <div className='pt-20 bg-base-300 min-h-screen'>
            <title>Login to your account</title>
            <div className='mt-10 text-center text-2xl md:text-4xl font-bold'>
                <h2 className=''>LOGIN TO YOUR ACCOUNT</h2>
            </div>
            <div className='md:px-20 px-5 flex flex-col-reverse md:flex-row md:gap-50 items-center'>
                <div className='md:ml-40'>
                    <Lottie
                        animationData={login}
                        loop
                        autoplay
                        className="w-80 md:w-105"
                    />
                </div>
                <div className="mt-10 card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                    <div className="card-body">
                        <form onSubmit={handleSubmit(handleLogin)} className="fieldset">
                            <fieldset className="fieldset">
                                {/* email field */}
                                <label className="label">Email</label>
                                <input type="email" {...register('email', { required: true })} className="input" placeholder="Email" />
                                {
                                    errors.email?.type === 'required' && <p className='text-red-500'>Email is required</p>
                                }

                                {/* password */}
                                <label className="label">Password</label>
                                <input type="password" {...register('password', {
                                    required: true,
                                    minLength: 6,
                                    pattern: /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[^A-Za-z0-9]).+$/
                                })} className="input" placeholder="Password" />
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
                                <div><a className="link link-hover">Forgot password?</a></div>
                                <button className="btn btn-primary mt-4">Login</button>
                                <p className='mt-2 mb-2 text-xl font-semibold text-center'>Or</p>
                                <SocialLogin></SocialLogin>
                            </fieldset>
                            <p className='mt-5 font-bold text-center'>Don't have an account? <span className='text-blue-600 hover:underline'><Link state={location?.state} to="/auth/register">Register</Link></span> </p>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;