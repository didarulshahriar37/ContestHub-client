import React, { useContext, useState, useEffect } from 'react';
import Swal from 'sweetalert2';
import { AuthContext } from '../../contexts/AuthContext';
import Loading from '../shared/Loading';

const BeACreator = () => {
    const { user } = useContext(AuthContext);

    const [fullName, setFullName] = useState('');
    const [portfolioURL, setPortfolioURL] = useState('');
    const [bio, setBio] = useState('');
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (user) {
            setFullName(user.displayName || '');
            setLoading(false);
        }
    }, [user]);

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!user) {
            Swal.fire({
                icon: 'error',
                title: 'Not Logged In',
                text: 'Please login to apply as a creator.'
            });
            return;
        }

        try {
            const token = await user.getIdToken();

            const response = await fetch(
                'https://contest-hub-server-green.vercel.app/apply-creator',
                {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${token}`,
                    },
                    body: JSON.stringify({
                        fullName,
                        email: user.email,
                        portfolioURL,
                        bio,
                    }),
                }
            );

            const data = await response.json();

            if (!response.ok) throw new Error(data.message || 'Application failed');

            Swal.fire({
                icon: 'success',
                title: 'Application Submitted!',
                text: 'You will be notified once approved.',
                showConfirmButton: true,
            });

            setPortfolioURL('');
            setBio('');

        } catch (err) {
            Swal.fire({
                icon: 'error',
                title: 'Failed',
                text: err.message,
            });
        }
    };

    if (loading) {
        return <Loading></Loading>;
    }

    return (
        <div className="md:px-20 px-5 pt-20 max-w-3xl mx-auto mb-20">
            <h2 className="text-2xl md:text-4xl font-bold text-center mb-10">
                Apply to Be a Creator
            </h2>

            <form
                onSubmit={handleSubmit}
                className="bg-base-100 shadow-xl rounded-xl p-8 space-y-5"
            >
                <div>
                    <label className="block font-medium mb-1">Full Name</label>
                    <input
                        type="text"
                        value={fullName}
                        onChange={(e) => setFullName(e.target.value)}
                        className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                        required
                    />
                </div>

                <div>
                    <label className="block font-medium mb-1">Email</label>
                    <input
                        type="email"
                        value={user.email}
                        disabled
                        className="w-full border border-gray-300 rounded-lg p-3 cursor-not-allowed"
                    />
                </div>

                <div>
                    <label className="block font-medium mb-1">Portfolio URL (Optional)</label>
                    <input
                        type="text"
                        value={portfolioURL}
                        onChange={(e) => setPortfolioURL(e.target.value)}
                        className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                        placeholder="Your Portfolio"
                    />
                </div>

                <div>
                    <label className="block font-medium mb-1">Tell Us About You</label>
                    <textarea
                        value={bio}
                        onChange={(e) => setBio(e.target.value)}
                        className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                        rows={4}
                        required
                        placeholder="Tell us a bit about yourself..."
                    />
                </div>

                <button
                    type="submit"
                    className="w-full btn btn-primary btn-outline font-semibold py-3 rounded-lg transition"
                >
                    Submit Application
                </button>
            </form>
        </div>
    );
};

export default BeACreator;