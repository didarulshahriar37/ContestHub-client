import React from 'react';
import AOS from "aos";
import { Link } from 'react-router';

const ContestCard = ({ contest }) => {
    console.log(contest);
    return (
        <div data-aos="fade-up" className="card shadow-xl rounded-lg bg-base-100 overflow-hidden hover:shadow-2xl transition-shadow duration-300 mt-5">
            <figure>
                <img
                    src={contest.image}
                    alt={contest.contest_name}
                    className="h-48 w-full object-cover"
                />
            </figure>

            <div className="card-body">

                <h2 className="card-title text-lg font-bold">
                    {contest.contest_name}
                </h2>

                <p className="text-sm text-gray-500">
                    Participants: {contest.participants_count}
                </p>

                <p className="text-gray-500 mt-2">
                    {contest.contest_description.length > 60
                        ? contest.contest_description.slice(0, 60) + "..."
                        : contest.contest_description}
                </p>

                <div className="card-actions justify-end mt-4">
                    <Link to={`/contest-details/${contest._id}`}
                        className="btn btn-soft btn-primary btn-sm"
                    >
                        Details
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default ContestCard;