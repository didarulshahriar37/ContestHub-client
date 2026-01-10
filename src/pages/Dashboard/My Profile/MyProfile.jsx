import React, { useContext, useState } from 'react';
import { AuthContext } from '../../../contexts/AuthContext';
import Swal from 'sweetalert2';
import { auth } from '../../../firebase/firebase.init';

const MyProfile = () => {
    const { user, updateUserProfile, setUser } = useContext(AuthContext);

    const [name, setName] = useState(user?.displayName || '');
    const [email] = useState(user?.email || '');
    const [photoURL, setPhotoURL] = useState(user?.photoURL || '');

    const handleUpdate = async (e) => {
        e.preventDefault();

        const updatedUser = { displayName: name, photoURL };

        try {
            await updateUserProfile(updatedUser);

            const token = await auth.currentUser.getIdToken();
            const response = await fetch(`https://contest-hub-server-green.vercel.app/users/${user.email}`, {
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                },
                body: JSON.stringify({ name, photoURL })
            });

            const data = await response.json();

            if (!response.ok) {
                throw new Error(data.message || 'Update failed');
            }
            setUser(prevUser => ({
                ...prevUser,
                displayName: name,
                photoURL
            }));

            Swal.fire({
                icon: 'success',
                title: 'Profile Updated!',
                showConfirmButton: false,
                timer: 1500
            });

        } catch (err) {
            Swal.fire({
                icon: 'error',
                title: 'Update Failed',
                text: err.message
            });
        }
    };

    return (
        <div className="max-w-4xl mx-auto p-5">
            <h2 className="text-2xl md:text-4xl font-bold text-center mb-10">My Profile</h2>
            <div className="bg-base-100 rounded-xl p-8 flex flex-col md:flex-row shadow-xl items-center gap-8 mb-10">
                <div className="shrink-0">
                    <img
                        src={photoURL}
                        alt="Profile"
                        className="w-32 h-32 md:w-40 md:h-40 rounded-full object-cover border-4 border-indigo-500 hover:scale-105 transition-transform"
                    />
                </div>
                <div className="text-center md:text-left">
                    <h3 className="text-2xl font-semibold">{user?.displayName}</h3>
                    <p className="">{user?.email}</p>
                </div>
            </div>
            <form onSubmit={handleUpdate} className="bg-base-100 shadow-lg rounded-xl p-6 space-y-5">
                <div>
                    <label className="block font-medium mb-1">Name</label>
                    <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                        required
                    />
                </div>

                <div>
                    <label className="block font-medium mb-1">Email (cannot edit)</label>
                    <input
                        type="email"
                        value={email}
                        disabled
                        className="w-full border border-gray-300 rounded-lg p-3 cursor-not-allowed"
                    />
                </div>

                <div>
                    <label className="block font-medium mb-1">Profile Photo URL</label>
                    <input
                        type="text"
                        value={photoURL}
                        onChange={(e) => setPhotoURL(e.target.value)}
                        className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                        placeholder="https://example.com/photo.jpg"
                    />
                </div>

                <button
                    type="submit"
                    className="w-full btn btn-primary btn-outline font-semibold py-3 rounded-lg transition"
                >
                    Update Profile
                </button>
            </form>
        </div>
    );
};

export default MyProfile;