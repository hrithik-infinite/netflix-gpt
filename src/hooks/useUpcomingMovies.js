import { useEffect } from "react";
import { API_OPTIONS } from "../utils/Constants";
import { useDispatch, useSelector } from "react-redux";
import { addUpcomingMovies } from "../utils/movieSlice";

const useUpcomingMovies = () => {
  const dispatch = useDispatch();
  const upcoming = useSelector((store) => store.movies.upcoming);

  const getUpcoming = async () => {
    const data = await fetch("https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1", API_OPTIONS)
      .then((response) => response.json())
      .then((response) => {
        dispatch(addUpcomingMovies(response.results));
      })
      .catch((err) => console.error(err));
  };
  useEffect(() => {
    if (!upcoming) {
      getUpcoming();
    }
  }, []);
};

export default useUpcomingMovies;
