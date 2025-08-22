import React from "react";

const ReferAFriend = () => {
  return (

    <div className="relative z-10">
      <div className="mx-auto w-[85%] max-w-5xl">
        <div className="bg-gradient-to-r from-orange-500 via-orange-400 to-orange-600 rounded-lg flex items-center justify-between px-12 pt-12 pb-6 shadow-2xl">
          <div>
            <h2 className="text-white text-2xl font-bold tracking-wide">
              REFER A FRIEND
            </h2>
            <p className="text-orange-100 text-lg font-semibold">And get $30!</p>
          </div>
          <button className="bg-white text-orange-600 font-bold px-6 py-2 rounded-lg hover:bg-orange-100 transition">
            Refer Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default ReferAFriend;