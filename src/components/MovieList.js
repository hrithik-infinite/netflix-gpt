// MovieList.js
import React from "react";
import MovieCard from "./MovieCard";

const MovieList = ({ title, movies }) => {
  return (
    <div className="my-8 relative">
      <h1 className="text-2xl font-semibold mb-4 text-white">{title}</h1>
      <div className="flex overflow-x-auto no-scrollbar">
        {movies &&
          movies.map((movie, index) => (
            <div key={index} className="flex-shrink-0 mr-4">
              <MovieCard data={movie} />
            </div>
          ))}
      </div>
    </div>
  );
};

export default MovieList;
