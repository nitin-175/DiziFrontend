import React from "react";

const ReferAFriend = () => {
  return (
    <div className="absolute -top-28 left-1/2 -translate-x-1/2 w-[85%] max-w-5xl">
      <div className="bg-gradient-to-br from-orange-500 via-orange-400 to-yellow-300 rounded-lg flex flex-col sm:flex-row items-center justify-between px-8 sm:px-12 pt-20 sm:pt-24 pb-6 shadow-2xl">
        <div className="text-center sm:text-left mb-4 sm:mb-0">
          <h2 className="text-white text-2xl sm:text-3xl font-extrabold tracking-wide">
            Refer a Friend
          </h2>
          <p className="text-orange-100 text-lg sm:text-xl font-semibold">
            And get $30!
          </p>
        </div>
        <button className="bg-white text-orange-600 font-bold px-6 py-3 rounded-lg hover:bg-orange-100 transition">
          Refer Now
        </button>
      </div>
    </div>
  );
};

export default ReferAFriend;
