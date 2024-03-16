import React, { useEffect } from "react";
import Header from "./Header";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import usePopularMovies from "../hooks/usePopularMovies";
import useTopRatedMovies from "../hooks/useTopRatedMovies";
import useUpcomingMovies from "../hooks/useUpcomingMovies";
import GPTSearch from "./GPTSearch";
import { useSelector } from "react-redux";
import MoreInfo from "./MoreInfo";

const Browse = () => {
  const showGPTSearch = useSelector((store) => store.gpt.showGPTSearch);
  const { showMoreInfo } = useSelector((store) => store.moreInfo);

  useNowPlayingMovies();
  usePopularMovies();
  useTopRatedMovies();
  useUpcomingMovies();

  useEffect(() => {
    if (showMoreInfo) {
      document.body.classList.add("modal-open");
    } else {
      document.body.classList.remove("modal-open");
    }
    return () => {
      document.body.classList.remove("modal-open");
    };
  }, [showMoreInfo]);

  return (
    <div className="relative h-screen">
      <Header />
      {!showGPTSearch && (
        <div className="absolute z-0 inset-0 bg-cover bg-no-repeat bg-center">
          <MainContainer />
          <div className="-mt-40 bg-black">
            <SecondaryContainer />
          </div>
        </div>
      )}
      {showGPTSearch && (
        <div className="absolute w-full h-full bg-black">
          <GPTSearch />
        </div>
      )}
      {showMoreInfo && <div className="absolute inset-0 bg-black opacity-50" />}
      {showMoreInfo && <MoreInfo />}
    </div>
  );
};

export default Browse;
