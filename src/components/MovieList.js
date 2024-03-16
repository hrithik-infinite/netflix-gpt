import React, { useState } from "react";
import MovieCard from "./MovieCard";
import MovieCardDetailed from "./MovieCardDetailed";

const MovieList = ({ title, movies }) => {
  // const [hoveredMovie, setHoveredMovie] = useState(null);
  // const [showDetail, setShowDetail] = useState(false);
  // const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseEnter = (movie, event) => {
    // setShowDetail(false);
    const { top, left } = event.target.getBoundingClientRect();
    const topLeft = { x: left, y: top };
    // setPosition(topLeft);
    // setTimeout(() => {
    //   setHoveredMovie(movie);
    //   setShowDetail(true);
    // }, 200);
  };

  const handleMouseLeave = () => {
    // setHoveredMovie(null);
    // setShowDetail(false);
  };

  return (
    <div className="my-8 relative">
      <h1 className="text-2xl font-semibold mb-4 text-white">{title}</h1>
      <div className="flex overflow-x-auto no-scrollbar relative">
        {movies &&
          movies.map((movie) => (
            <div key={movie.id} className="flex-shrink-0 mr-4 cursor-pointer relative" onMouseEnter={(e) => handleMouseEnter(movie, e)} onMouseLeave={handleMouseLeave}>
              <MovieCard data={movie} />
              {/* <>{showDetail && hoveredMovie && hoveredMovie.id === movie.id && (
                <div
                  className="absolute"
                  style={{
                    top: position.y,
                    left: position.x,
                    zIndex: 1000,
                  }}>
                  <MovieCardDetailed movie={hoveredMovie} />
                  
                </div>
                
              )}
              </> */}
            </div>
          ))}
      </div>
    </div>
  );
};

export default MovieList;
