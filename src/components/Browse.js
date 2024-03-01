import React, { useEffect } from "react";
import Header from "./Header";
import { API_OPTIONS } from "../utils/Constants";
const Browse = () => {
  const getNowPlaying = async () => {
    const data = await fetch("https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1", API_OPTIONS)
      .then((response) => response.json())
      .then((response) => console.log(response))
      .catch((err) => console.error(err));
  };
  useEffect(() => {
    getNowPlaying();
  }, []);
  return (
    <div>
      <Header />
    </div>
  );
};

export default Browse;
