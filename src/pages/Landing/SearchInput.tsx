import React, { useState } from "react";
import { LandingPageData } from "../../constants";
import SearchButton from "../../assets/search-button.png";

const SearchInput: React.FC = () => {
  const {
    searchSection: { searchPlaceholder },
  } = LandingPageData;

  const [searchTerm, setSearchTerm] = useState<string>("");

  const handleSearch = () => {
    if (searchTerm.trimEnd() === "") {
      console.log("검색어를 입력해주세요");
      return;
    }
    console.log(`${searchTerm} 검색`);
  };

  return (
    <div className="relative w-full mb-2">
      <input
        type="text"
        placeholder={searchPlaceholder}
        className="px-4 py-2 border-4 rounded-full w-full focus:outline-none focus:border-slate-500"
        onChange={(e) => {
          setSearchTerm(e.target.value);
        }}
      />
      <button
        className="absolute right-2 top-1/2 transform -translate-y-1/2 w-10 h-10 border-none outline-none bg-transparent cursor-pointer"
        onClick={handleSearch}
      >
        <img src={SearchButton} alt="Search button" />
      </button>
    </div>
  );
};
export default SearchInput;
