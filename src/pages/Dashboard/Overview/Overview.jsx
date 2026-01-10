import React, { useMemo } from 'react';
import { useLoaderData } from 'react-router';
import {
    PieChart,
    Pie,
    Tooltip,
    Legend,
    ResponsiveContainer,
    Cell
} from 'recharts';

const COLORS = [
    '#6366F1',
    '#22C55E',
    '#F97316',
    '#EF4444',
    '#14B8A6',
    '#A855F7',
    '#EAB308',
];

const Overview = () => {
    const contests = useLoaderData();

    const chartData = useMemo(() => {
        const map = {};

        contests.forEach(contest => {
            const type = contest.contest_type || 'Unknown';
            map[type] = (map[type] || 0) + 1;
        });

        return Object.keys(map).map(type => ({
            name: type,
            value: map[type],
        }));
    }, [contests]);

    return (
        <div className="min-h-screen md:px-10">
            <div>
                <h2 className="text-2xl md:text-4xl font-bold mb-8 text-center">
                    Overview
                </h2>

                <div className="bg-base-100 rounded-xl shadow-md p-5 md:p-8">
                    <h3 className="text-lg md:text-xl font-semibold mb-4 text-center">
                        Contests Overview
                    </h3>

                    <div className="w-full h-100 md:h-120">
                        <ResponsiveContainer width="100%" height="100%">
                            <PieChart>
                                <Pie
                                    data={chartData}
                                    dataKey="value"
                                    nameKey="name"
                                    cx="50%"
                                    cy="50%"
                                    outerRadius="80%"
                                    label
                                >
                                    {chartData.map((_, index) => (
                                        <Cell
                                            key={index}
                                            fill={COLORS[index % COLORS.length]}
                                        />
                                    ))}
                                </Pie>

                                <Tooltip />
                                <Legend />
                            </PieChart>
                        </ResponsiveContainer>
                    </div>
                </div>
                <div>
                    
                </div>
            </div>
        </div>
    );
};

export default Overview;