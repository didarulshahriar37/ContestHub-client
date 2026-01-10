import React, { useMemo, useState } from 'react';
import { useLoaderData } from 'react-router';
import ContestCard from '../../components/ContestCard/ContestCard';
import { IoFilter } from 'react-icons/io5';

const AllContests = () => {
    const contests = useLoaderData();

    const [selectedType, setSelectedType] = useState("All");
    const [searchTerm, setSearchTerm] = useState("");

    // ✅ Unique contest types
    const contestTypes = useMemo(() => {
        const types = contests.map(contest => contest.contest_type);
        return ["All", ...new Set(types)];
    }, [contests]);

    // ✅ Combined filter (category + search)
    const filteredContests = useMemo(() => {
        return contests.filter(contest => {
            const matchesType =
                selectedType === "All" ||
                contest.contest_type === selectedType;

            const matchesSearch =
                contest.contest_name
                    .toLowerCase()
                    .includes(searchTerm.toLowerCase());

            return matchesType && matchesSearch;
        });
    }, [contests, selectedType, searchTerm]);

    return (
        <div className="pt-10 mt-10 mb-10 md:px-20 px-5">
            <h2 className="text-2xl md:text-4xl font-bold text-center">
                All Contests ({filteredContests.length})
            </h2>

            <div className="mt-10 flex flex-col md:flex-row gap-4 justify-between">
                {/* 🔍 Search */}
                <label className="input input-bordered flex items-center gap-2 w-full md:w-72">
                    <svg
                        className="h-[1em] opacity-50"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                    >
                        <g
                            strokeLinejoin="round"
                            strokeLinecap="round"
                            strokeWidth="2.5"
                            fill="none"
                            stroke="currentColor"
                        >
                            <circle cx="11" cy="11" r="8"></circle>
                            <path d="m21 21-4.3-4.3"></path>
                        </g>
                    </svg>
                    <input
                        type="search"
                        placeholder="Search contests..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="grow"
                    />
                </label>

                {/* 🎯 Filter */}
                <div className="dropdown dropdown-end">
                    <div
                        tabIndex={0}
                        role="button"
                        className="btn m-1 flex gap-2"
                    >
                        <IoFilter />
                        {selectedType}
                    </div>

                    <ul
                        tabIndex={-1}
                        className="dropdown-content menu bg-base-100 rounded-box z-10 w-52 p-2 shadow"
                    >
                        {contestTypes.map((type, index) => (
                            <li key={index}>
                                <button
                                    onClick={() => setSelectedType(type)}
                                    className={`${selectedType === type
                                            ? "font-semibold text-primary"
                                            : ""
                                        }`}
                                >
                                    {type}
                                </button>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>

            {/* 🧩 Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 mx-auto mt-8 gap-5 md:gap-10">
                {filteredContests.length > 0 ? (
                    filteredContests.map(contest => (
                        <ContestCard
                            key={contest._id}
                            contest={contest}
                        />
                    ))
                ) : (
                    <p className="col-span-full text-center text-gray-500 mt-10">
                        No contests found 😕
                    </p>
                )}
            </div>
        </div>
    );
};

export default AllContests;