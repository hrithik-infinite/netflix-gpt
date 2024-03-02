import { useEffect } from "react";
import { API_OPTIONS } from "../utils/Constants";
import { useDispatch } from "react-redux";
import { addTopRated } from "../utils/movieSlice";

const useTopRatedMovies = () => {
  const dispatch = useDispatch();

  const getTopRated = async () => {
    const data = await fetch("https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1", API_OPTIONS)
      .then((response) => response.json())
      .then((response) => {
        dispatch(addTopRated(response.results));
      })
      .catch((err) => console.error(err));
  };
  useEffect(() => {
    getTopRated();
  }, []);
};

export default useTopRatedMovies;
