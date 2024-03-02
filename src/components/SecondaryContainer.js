import React from "react";
import MovieList from "./MovieList";
import { useSelector } from "react-redux";

const SecondaryContainer = () => {
  const movies = useSelector((store) => store.movies);

  return (
    <div className="mx-10">
      <MovieList title={"Now Playing"} movies={movies?.nowPlayingMovies} />
      <MovieList title={"Top Rated"} movies={movies?.topRated} />
      <MovieList title={"Upcoming"} movies={movies?.upcoming} />
      <MovieList title={"Popular"} movies={movies?.popular} />
    </div>
  );
};

export default SecondaryContainer;
