import React, { useRef } from "react";
import openai from "../utils/openAI";
import { API_OPTIONS } from "../utils/Constants";
import { useDispatch } from "react-redux";
import { addGPTMovieResult } from "../utils/gptSlice";

const GPTSearchBar = () => {
  const dispatch = useDispatch();
  const searchTxt = useRef();
  const searchMovieinTMDB = async (movie) => {
    const data = await fetch(
      "https://api.themoviedb.org/3/search/movie?query=" +
        movie +
        "&include_adult=false&language=en-US&page=1",
      API_OPTIONS,
    );
    const json = await data.json();
    return json;
  };
  const handleGPTSearch = async () => {
    const gptQuery =
      "Act as a Movie Recommendation system and suggest some movies for the query" +
      searchTxt.current.value +
      ". Only give me names of 5 movies , comma separated like example given ahead. Example result: [movie1,movie2,movie3,movie4,movie5]";
    const chatCompletion = await openai.chat.completions.create({
      messages: [{ role: "user", content: gptQuery }],
      model: "gpt-3.5-turbo",
    });
    const getMovies = chatCompletion?.choices[0]?.message?.content;
    const stringWithoutBrackets = getMovies.slice(1, -1);
    const movieArray = stringWithoutBrackets.split(", ");
    const promiseArray = movieArray.map((movie) => searchMovieinTMDB(movie));
    const tmdbResults = await Promise.all(promiseArray);
    dispatch(
      addGPTMovieResult({ tmdbResults: tmdbResults, movieNames: movieArray }),
    );
  };

  return (
    <div className=" w-full flex items-center justify-center bg-black p-4 rounded-md shadow-md ">
      <input
        ref={searchTxt}
        type="text"
        placeholder="Search..."
        className="w-1/3 py-2 px-4 bg-gray-700 text-white placeholder-gray-300 border-0 rounded-l-md focus:outline-none"
      />
      <button
        className="px-6 py-2 bg-red-600 text-white font-semibold rounded-r-md hover:bg-red-700 focus:outline-none"
        onClick={handleGPTSearch}
      >
        Search
      </button>
    </div>
  );
};

export default GPTSearchBar;
