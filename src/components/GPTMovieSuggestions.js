import React from "react";
import { useSelector } from "react-redux";
import MovieList from "../components/MovieList";
const GPTMovieSuggestions = () => {
  const { gptRecommended, movieNames } = useSelector((store) => store.gpt);

  if (!movieNames) return;
  return (
    <div className="p-4  bg-black text-white">
      {movieNames &&
        movieNames.map((movie, index) => (
          <MovieList
            key={movie}
            title={movieNames[index]}
            movies={gptRecommended[index].results}
          />
        ))}
    </div>
  );
};

export default GPTMovieSuggestions;
