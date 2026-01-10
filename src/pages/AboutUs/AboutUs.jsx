import React from 'react';

const AboutUs = () => {
    return (
        <section className="pt-20 md:px-20 px-5">
            <title>About Us</title>
            <div className="text-center max-w-3xl mx-auto mb-20">
                <h1 className="text-2xl md:text-4xl font-bold">
                    About Us
                </h1>
                <p className="mt-5 text-lg">
                    A platform built to connect creators, competitors, and opportunities —
                    all in one place.
                </p>
            </div>

            <div className="mb-15">
                <div>
                    <h2 className="text-xl md:text-3xl font-semibold mb-4">
                        What is <span className='text-primary'>Contest</span>Hub?
                    </h2>
                    <p className="md:text-xl leading-relaxed mb-4">
                       -- ContestHub is a centralized platform where users can discover,
                        create, and participate in contests across various categories such
                        as coding, design, gaming, and more.
                    </p>
                    <p className="md:text-xl leading-relaxed">
                       -- Our goal is to make competitions more accessible, transparent, and
                        rewarding for everyone.
                    </p>
                </div>
            </div>

            <div className="grid md:grid-cols-3 gap-8 mb-24">
                <div className="bg-linear-to-r from-primary/70 via-primary/50 to-primary/70 rounded-xl p-8 shadow-xl hover:shadow-2xl transition">
                    <h3 className="text-xl font-bold text-white mb-3">
                        Our Mission
                    </h3>
                    <p className="font-semibold text-white">
                        To empower individuals by providing equal access to competitive
                        opportunities worldwide.
                    </p>
                </div>

                <div className="bg-linear-to-r from-primary/70 via-primary/50 to-primary/70 rounded-xl p-8 shadow-xl hover:shadow-2xl transition">
                    <h3 className="text-xl font-bold text-white mb-3">
                        Our Vision
                    </h3>
                    <p className="font-semibold text-white">
                        To become the most trusted global hub for contests and skill-based
                        challenges.
                    </p>
                </div>

                <div className="bg-linear-to-r from-primary/70 via-primary/50 to-primary/70 rounded-xl p-8 shadow-xl hover:shadow-2xl transition">
                    <h3 className="text-xl font-bold text-white mb-3">
                        Our Values
                    </h3>
                    <p className="text-white font-semibold">
                        Fairness, transparency, creativity, and community-driven growth.
                    </p>
                </div>
            </div>

            {/* Why ContestHub */}
            <div className="text-center mx-auto">
                <h2 className="md:text-4xl text-2xl font-semibold mb-6">
                    Why Choose Us?
                </h2>
                <p className="text-xl md:text-2xl leading-relaxed mb-20">
                    Whether you’re a participant looking to prove your skills or an
                    organizer aiming to reach the right audience, ContestHub provides the
                    tools, visibility, and trust needed to succeed.
                </p>
            </div>
        </section>
    );
};

export default AboutUs;
