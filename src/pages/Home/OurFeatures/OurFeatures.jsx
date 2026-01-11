import { FaTrophy, FaUsers, FaShieldAlt, FaRocket } from "react-icons/fa";

const OurFeatures = () => {
    return (
        <section className="md:px-20 px-5 bg-base-300">
            <h2 className="text-2xl md:text-4xl font-bold text-center mb-4">
                Our Features
            </h2>
            <p className="md:text-2xl text-center mx-auto mb-12">
                Everything you need to participate, create, and win exciting contests — all in one platform.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                
                {/* Feature 1 */}
                <div className="card bg-base-100 shadow-xl hover:shadow-2xl transition">
                    <div className="card-body items-center text-center">
                        <FaTrophy className="text-4xl text-indigo-500 mb-4" />
                        <h3 className="card-title">Exciting Contests</h3>
                        <p className="text-gray-500">
                            Participate in skill-based contests and compete with talented people worldwide.
                        </p>
                    </div>
                </div>

                {/* Feature 2 */}
                <div className="card bg-base-100 shadow-xl hover:shadow-2xl transition">
                    <div className="card-body items-center text-center">
                        <FaUsers className="text-4xl text-indigo-500 mb-4" />
                        <h3 className="card-title">Creator System</h3>
                        <p className="text-gray-500">
                            Become a creator, host contests, and build your own competitive community.
                        </p>
                    </div>
                </div>

                {/* Feature 3 */}
                <div className="card bg-base-100 shadow-xl hover:shadow-2xl transition">
                    <div className="card-body items-center text-center">
                        <FaShieldAlt className="text-4xl text-indigo-500 mb-4" />
                        <h3 className="card-title">Secure & Fair</h3>
                        <p className="text-gray-500">
                            Verified users, admin approvals, and transparent contest management.
                        </p>
                    </div>
                </div>

                {/* Feature 4 */}
                <div className="card bg-base-100 shadow-xl hover:shadow-2xl transition">
                    <div className="card-body items-center text-center">
                        <FaRocket className="text-4xl text-indigo-500 mb-4" />
                        <h3 className="card-title">Fast Growth</h3>
                        <p className="text-gray-500">
                            Track your progress, win rewards, and grow your reputation quickly.
                        </p>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default OurFeatures;