import React from "react";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";

const VideoTitle = ({ title, overview }) => {
  const truncateOverview = (text, maxLength) => {
    if (text.length > maxLength) {
      return text.substr(0, maxLength) + "...";
    }
    return text;
  };

  const truncatedOverview = truncateOverview(overview, 300);

  return (
    <div className="absolute mt-20 px-12 z-[0] left-0 top-[20vh] w-1/4">
      <div className="relative bg-black bg-opacity-60 rounded-lg p-4 inline-flex flex-col">
        <h1 className="text-4xl font-bold mb-2 text-white">{title}</h1>
        <p className="text-lg mb-4 text-white">{truncatedOverview}</p>
        <div className="flex space-x-4">
          <button className="bg-white text-black px-6 py-2 rounded-md shadow-lg hover:bg-red-700 transition duration-300">
            <PlayArrowIcon style={{ color: "black" }} /> Play
          </button>
          <button className="bg-gray-800 text-white px-6 py-2 opacity-80 rounded-md shadow-lg hover:bg-gray-900 transition duration-300">
            <InfoOutlinedIcon />
            <span className="ml-2">More Info</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default VideoTitle;
