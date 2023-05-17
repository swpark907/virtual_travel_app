import React from "react";
import { LandingPageData } from "../../constants";
import SearchButton from "../../assets/search-button.png";

const SearchArea: React.FC = () => {
  const {
    searchSection: { searchPlaceholder },
  } = LandingPageData;
  return (
    <main className="px-20 flex justify-center w-1/2 mx-auto mt-4">
      <div className="relative w-full">
        <input
          type="text"
          placeholder={searchPlaceholder}
          className="px-4 py-2 border-4 rounded-full w-full focus:outline-none focus:border-black"
        />
        <img
          src={SearchButton}
          alt="SearchButton"
          className="absolute right-2 top-1/2 transform -translate-y-1/2 w-10 h-10"
        />
      </div>
    </main>
  );
};
export default SearchArea;
