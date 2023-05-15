import React from "react";
import LandingPageData from "../../constants/landingPageData";
import SearchButton from "../../assets/search-button.png";

const Landing: React.FC = () => {
  const {
    heroSection: { mainTitle, subTitle, hashtags },
    searchSection: { searchPlaceholder },
  } = LandingPageData;

  return (
    <div className="landing">
      <header className="w-full bg-themeColor py-4 flex">
        <div className="mx-auto max-w-screen-xl px-20 text-right w-full">
          <h1 className="text-5xl font-semibold mb-2">{mainTitle}</h1>
          <h2 className="text-2xl mb-2">{subTitle}</h2>
          <h3 className="text-lg">{hashtags}</h3>
        </div>
        <div className="캐러셀 들어갈 곳 w-full"></div>
      </header>
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
    </div>
  );
};

export default Landing;
