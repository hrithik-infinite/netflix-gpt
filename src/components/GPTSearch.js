import React from "react";
import GPTSearchBar from "./GPTSearchBar";
import GPTMovieSuggestions from "./GPTMovieSuggestions";

const GPTSearch = () => {
  return (
    <div>
      <div className="mt-40 w-full">
        <GPTSearchBar />
      </div>
      <GPTMovieSuggestions />
    </div>
  );
};

export default GPTSearch;
