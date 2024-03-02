import React from "react";
import { useSelector } from "react-redux";
import VideoTitle from "./VideoTitle";
import VideoBackground from "./VideoBackground";

const MainContainer = () => {
  const movies = useSelector((store) => store.movies?.nowPlayingMovies);
  function getRandomNumber() {
    return Math.floor(Math.random() * 20);
  }
  if (!movies) return;
  const mainMovie = movies[getRandomNumber()];
  const { original_title, overview } = mainMovie;
  return (
    <div>
      <VideoTitle className = "mt-20 px-12" title={original_title} overview={overview} />
      <VideoBackground />
    </div>
  );
};

export default MainContainer;
