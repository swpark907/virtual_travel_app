import React from "react";
import HeroArea from "./HeroArea";
import SearchArea from "./SearchArea";

const Landing: React.FC = () => {
  return (
    <div className="landing">
      <HeroArea />
      <SearchArea />
    </div>
  );
};

export default Landing;
