import React from "react";

const ReferAFriend = () => {
  return (
    <div className="absolute -top-28 left-1/2 -translate-x-1/2 w-[85%] max-w-5xl">
  <div className="bg-gradient-to-br from-orange-500 via-orange-400 to-yellow-300 rounded-lg flex items-center justify-between px-12 pt-24 pb-4 shadow-2xl">
        <div>
          <h2 className="text-white text-xl font-bold tracking-wide">
            REFER A FRIENDS
          </h2>
          <p className="text-orange-100 text-lg font-semibold">And get $30!</p>
        </div>
        <button className="bg-white text-orange-600 font-bold px-6 py-2 rounded-lg hover:bg-orange-100 transition">
          Refer Now
        </button>
      </div>
    </div>
  );
};

export default ReferAFriend;
