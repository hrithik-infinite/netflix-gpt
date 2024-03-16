import React from "react";
import { useSelector } from "react-redux";
import useFetchTrailer from "../hooks/useFetchTrailer";

const VideoBackground = ({ movieId }) => {
  const trailer = useSelector((store) => store.movies?.trailerVideo);
  useFetchTrailer(movieId);
  return (
    <div className="h-full w-full absolute inset-0 pointer-events-none">
      <iframe
        src={"https://www.youtube.com/embed/" + trailer?.key + "?autoplay=1&mute=1&showinfo=0&controls=0"}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
        className="h-full w-full pointer-events-none"></iframe>
    </div>
  );
};

export default VideoBackground;
