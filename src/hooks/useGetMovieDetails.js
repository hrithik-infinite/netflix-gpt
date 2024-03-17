import { useEffect } from "react";
import { API_OPTIONS } from "../utils/Constants";
import { useDispatch, useSelector } from "react-redux";
import { movieData } from "../utils/moreInfoSlice";

const useGetMovieDetails = () => {
  const dispatch = useDispatch();
  const moreInfoMovie = useSelector((store) => store.moreInfo.moreInfoData);
  const getMovieData = async () => {
    const data = await fetch("https://api.themoviedb.org/3/movie/" + moreInfoMovie?.id, API_OPTIONS)
      .then((response) => response.json())
      .then((response) => {
        dispatch(movieData(response));
      })
      .catch((err) => console.error(err));
  };
  useEffect(() => {
    getMovieData();
  }, []);
};

export default useGetMovieDetails;
