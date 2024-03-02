// MovieCard.js
import React from "react";
import { IMAGE_CDN_PATH } from "../utils/Constants";

const MovieCard = ({ data }) => {
  const { poster_path, original_title } = data;
  if (!poster_path) return;
  return (
    <div className="bg-white rounded-lg shadow-lg p-2 w-[200px] h-[300px]">
      <img src={IMAGE_CDN_PATH + poster_path} alt={original_title} className="w-full h-full object-contain	" />
    </div>
  );
};

export default MovieCard;
