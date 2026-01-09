import React from 'react';
import { FaRegLightbulb, FaTrophy, FaUsers, FaDollarSign, FaRocket } from "react-icons/fa";

const services = [
    {
        title: "Create Contests",
        description: "Design and launch creative contests with ease. Set prizes, deadlines, and rules effortlessly.",
        icon: <FaRegLightbulb className="w-8 h-8 text-amber-300" />
    },
    {
        title: "Participate & Win",
        description: "Join exciting contests, submit your entries, and compete with other talented participants.",
        icon: <FaTrophy className="w-8 h-8 text-amber-400" />
    },
    {
        title: "Manage Participants",
        description: "Track participants, view submissions, and manage your contest from a single dashboard.",
        icon: <FaUsers className="w-8 h-8 text-black" />
    },
    {
        title: "Secure Payments",
        description: "Pay entry fees and receive rewards securely using integrated payment gateways.",
        icon: <FaDollarSign className="w-8 h-8 text-green-600" />
    },
    {
        title: "Celebrate Achievements",
        description: "Showcase winners and their prizes across the platform to motivate others.",
        icon: <FaRocket className="w-8 h-8 text-blue-300" />
    },
];

const Services = () => {
    return (
        <div className='mt-20 mb-15'>
            <h2 className='text-2xl md:text-4xl font-bold text-center mb-5'>Our Services</h2>
            <p className="text-gray-600 text-center md:text-2xl mb-15">
                Empowering creators, participants, and admins to make contests engaging, fun, and rewarding.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-5 md:px-20">
                {services.map((service, index) => (
                    <div
                        key={index}
                        className="p-8 bg-linear-to-r from-primary/70 via-primary/50 to-primary/70 rounded-2xl shadow-xl hover:scale-105 transform transition duration-300 cursor-pointer"
                    >
                        <div className="flex items-center justify-center w-16 h-16 bg-white rounded-full mb-5 mx-auto">
                            {service.icon}
                        </div>
                        <h3 className="text-xl md:text-2xl font-bold text-white mb-3">{service.title}</h3>
                        <p className="text-white/90 text-base">{service.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Services;