import React from "react";
import Header from "./Header";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import usePopularMovies from "../hooks/usePopularMovies";
import useTopRatedMovies from "../hooks/useTopRatedMovies";
import useUpcomingMovies from "../hooks/useUpcomingMovies";

const Browse = () => {
  useNowPlayingMovies();
  usePopularMovies();
  useTopRatedMovies();
  useUpcomingMovies();
  return (
    <div className="relative h-screen">
      <Header />
      <div className="absolute z-0 inset-0 bg-cover bg-no-repeat bg-center">
        <MainContainer />
        <div className="-mt-40 bg-black">
          <SecondaryContainer />
        </div>
      </div>
    </div>
  );
};

export default Browse;
