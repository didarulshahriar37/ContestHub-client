import React from "react";

const WinnerCard = ({ winner }) => {
    const { _id, winner_name, winner_photo, contest_name } = winner;

    return (
        <div className="rounded-2xl shadow-xl overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-2xl">
            <div className="flex flex-col items-center p-6 bg-linear-to-r from-primary/70 via-primary/50 to-primary/70">
                <img
                    src={winner_photo}
                    alt={winner_name}
                    className="w-32 h-32 object-cover rounded-full border-4 border-white shadow-lg"
                />
                <h3 className="mt-4 text-xl md:text-2xl font-bold text-white text-center">
                    {winner_name}
                </h3>
                <p className="mt-1 text-sm md:text-base text-white/90 text-center">
                    {contest_name}
                </p>
            </div>
        </div>
    );
};

export default WinnerCard;