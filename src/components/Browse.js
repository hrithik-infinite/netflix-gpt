import React from "react";
import Header from "./Header";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import usePopularMovies from "../hooks/usePopularMovies";
import useTopRatedMovies from "../hooks/useTopRatedMovies";
import useUpcomingMovies from "../hooks/useUpcomingMovies";
import GPTSearch from "./GPTSearch";
import { useSelector } from "react-redux";

const Browse = () => {
  const showGPTSearch = useSelector((store) => store.gpt.showGPTSearch);
  useNowPlayingMovies();
  usePopularMovies();
  useTopRatedMovies();
  useUpcomingMovies();
  return (
    <div className="relative h-screen">
      <Header />
      {showGPTSearch ? (
        <div className="absolute w-full h-full bg-black">
          <GPTSearch />
        </div>
      ) : (
        <div className="absolute z-0 inset-0 bg-cover bg-no-repeat bg-center">
          <MainContainer />
          <div className="-mt-40 bg-black">
            <SecondaryContainer />
          </div>
        </div>
      )}
    </div>
  );
};

export default Browse;
