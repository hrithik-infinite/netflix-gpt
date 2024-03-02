import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTrailerVideo } from "../utils/movieSlice";
import { API_OPTIONS } from "../utils/Constants";

const useFetchTrailer = ( movieId ) => {
  const dispatch = useDispatch();
  const getMovieVideo = async () => {
    const response = await fetch(`https://api.themoviedb.org/3/movie/${movieId}/videos?language=en-US`, API_OPTIONS);
    const data = await response.json();
    const trailerData = data.results.find((val) => val.type === "Trailer");
    const _trailer = trailerData ? trailerData : data.results[0];
    dispatch(addTrailerVideo(_trailer));
  };
  useEffect(() => {
    getMovieVideo();
  }, []);
};

export default useFetchTrailer;
