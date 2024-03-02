import React from "react";

const GPTSearchBar = () => {
  return (
    <div className=" w-full flex items-center justify-center bg-black p-4 rounded-md shadow-md ">
      <input type="text" placeholder="Search..." className="w-1/3 py-2 px-4 bg-gray-700 text-white placeholder-gray-300 border-0 rounded-l-md focus:outline-none" />
      <button className="px-6 py-2 bg-red-600 text-white font-semibold rounded-r-md hover:bg-red-700 focus:outline-none">Search</button>
    </div>
  );
};

export default GPTSearchBar;
