// MainContainer.js
import React from "react";
import { useSelector } from "react-redux";
import VideoTitle from "./VideoTitle";
import VideoBackground from "./VideoBackground";

const MainContainer = () => {
  const movies = useSelector((store) => store.movies?.nowPlayingMovies);
  function getRandomNumber() {
    return Math.floor(Math.random() * 20);
  }
  if (!movies) return null;
  const mainMovie = movies[getRandomNumber()];
  const { original_title, overview, id } = mainMovie;
  return (
    <div className="h-screen w-screen flex justify-center items-center relative">
      <VideoBackground movieId={id} />
      <VideoTitle title={original_title} overview={overview} />
    </div>
  );
};

export default MainContainer;
