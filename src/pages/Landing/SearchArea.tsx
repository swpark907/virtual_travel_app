import React from "react";
import RealTimeTrending from "./RealTimeTrending";
import SearchInput from "./SearchInput";

const SearchArea: React.FC = () => {
  return (
    <main className="px-20 flex justify-center w-3/5 mx-auto mt-4 flex-col min-w-max">
      <SearchInput />
      <RealTimeTrending />
    </main>
  );
};
export default SearchArea;
