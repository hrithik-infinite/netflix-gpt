import { useEffect } from "react";
import { API_OPTIONS } from "../utils/Constants";
import { useDispatch, useSelector } from "react-redux";
import { addNowPlayingMovies } from "../utils/movieSlice";

const useNowPlayingMovies = () => {
  const dispatch = useDispatch();
  const nowPlayingMovies = useSelector(
    (store) => store.movies.nowPlayingMovies,
  );
  const getNowPlaying = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1",
      API_OPTIONS,
    )
      .then((response) => response.json())
      .then((response) => {
        dispatch(addNowPlayingMovies(response.results));
      })
      .catch((err) => console.error(err));
  };
  useEffect(() => {
    if (!nowPlayingMovies) {
      getNowPlaying();
    }
  }, []);
};

export default useNowPlayingMovies;
