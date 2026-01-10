import { Mail, Phone, MapPin } from "lucide-react";

const ContactUs = () => {
    return (
        <section className="md:px-20 px-5 mx-auto pt-20 mb-20">
            <div className="text-center max-w-3xl mx-auto mb-20">
                <h1 className="text-2xl md:text-4xl font-bold">
                    Contact <span className="text-primary">Us</span>
                </h1>
                <p className="mt-5 text-xl md:text-2xl">
                    Have questions, feedback, or need support? We’re here to help you.
                </p>
            </div>

            <div className="grid md:grid-cols-2 gap-16 items-center">
                <div className="space-y-10">
                    <div>
                        <h2 className="text-xl md:text-3xl font-semibold mb-4">
                            Get in Touch
                        </h2>
                        <p className="">
                            Reach out to us anytime — our team will respond as quickly as
                            possible.
                        </p>
                    </div>

                    <div className="space-y-6">
                        <div className="flex items-center gap-4">
                            <div className="p-3 bg-indigo-500 text-white rounded-full">
                                <Mail size={20} />
                            </div>
                            <div>
                                <p className="font-semibold">
                                    Email
                                </p>
                                <p className="">
                                    support@contesthub.com
                                </p>
                            </div>
                        </div>

                        <div className="flex items-center gap-4">
                            <div className="p-3 bg-indigo-500 text-white rounded-full">
                                <Phone size={20} />
                            </div>
                            <div>
                                <p className="font-semibold">
                                    Phone
                                </p>
                                <p className="">
                                    +880 1234 567 890
                                </p>
                            </div>
                        </div>

                        <div className="flex items-center gap-4">
                            <div className="p-3 bg-indigo-500 text-white rounded-full">
                                <MapPin size={20} />
                            </div>
                            <div>
                                <p className="font-semibold">
                                    Location
                                </p>
                                <p className="">
                                    Dhaka, Bangladesh
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="bg-primary/40 rounded-2xl shadow-lg p-8">
                    <h3 className="text-2xl font-semibold mb-6">
                        Send Us a Message
                    </h3>

                    <form className="space-y-5">
                        <div>
                            <label className="block mb-1 text-sm font-medium">
                                Your Name
                            </label>
                            <input
                                type="text"
                                placeholder="Enter your name"
                                className="w-full px-4 py-3 rounded-lg border bg-transparent focus:outline-none focus:ring-2 focus:ring-indigo-500"
                            />
                        </div>

                        <div>
                            <label className="block mb-1 text-sm font-medium">
                                Email Address
                            </label>
                            <input
                                type="email"
                                placeholder="Enter your email"
                                className="w-full px-4 py-3 rounded-lg border bg-transparent focus:outline-none focus:ring-2 focus:ring-indigo-500"
                            />
                        </div>

                        <div>
                            <label className="block mb-1 text-sm font-medium">
                                Message
                            </label>
                            <textarea
                                rows="4"
                                placeholder="Write your message here..."
                                className="w-full px-4 py-3 rounded-lg border bg-transparent focus:outline-none focus:ring-2 focus:ring-indigo-500"
                            ></textarea>
                        </div>

                        <button
                            type="submit"
                            className="w-full py-3 rounded-lg bg-indigo-500 text-white font-semibold hover:bg-indigo-600 transition"
                        >
                            Send Message
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default ContactUs;