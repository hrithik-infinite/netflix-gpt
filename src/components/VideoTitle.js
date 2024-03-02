import React from "react";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";

const VideoTitle = ({ title, overview, className }) => {
  return (
    <div className={`relative ${className}`}>
      <h1 className="text-4xl font-bold mb-2">{title}</h1>
      <p className="text-lg mb-4 w-1/3">{overview}</p>
      <div className="flex space-x-4">
        <button className="bg-white text-black px-6 py-2 rounded-md shadow-lg hover:bg-red-700 transition duration-300">
          <PlayArrowIcon style={{ color: "black" }} /> Play
        </button>
        <button className="bg-gray-800 text-white px-6 py-2 opacity-80 rounded-md shadow-lg hover:bg-gray-900 transition duration-300">
          <InfoOutlinedIcon />
          More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
