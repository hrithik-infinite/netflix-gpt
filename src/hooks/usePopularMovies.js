import { useEffect } from "react";
import { API_OPTIONS } from "../utils/Constants";
import { useDispatch, useSelector } from "react-redux";
import { addPopularMovies } from "../utils/movieSlice";

const usePopularMovies = () => {
  const dispatch = useDispatch();
  const popular = useSelector((store) => store.movies.popular);

  const getNowPlaying = async () => {
    const data = await fetch("https://api.themoviedb.org/3/movie/popular?language=en-US&page=1", API_OPTIONS)
      .then((response) => response.json())
      .then((response) => {
        dispatch(addPopularMovies(response.results));
      })
      .catch((err) => console.error(err));
  };
  useEffect(() => {
    if (!popular) {
      getNowPlaying();
    }
  }, []);
};

export default usePopularMovies;
