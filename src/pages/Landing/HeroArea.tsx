import React from "react";
import TitleSection from "./TitleSection";
import CarouselSection from "./CarouselSection";

const HeroArea: React.FC = () => {
  return (
    <header className="w-full bg-themeColor py-4  px-4 flex md:flex-row flex-col">
      <TitleSection />
      <CarouselSection />
    </header>
  );
};
export default HeroArea;
