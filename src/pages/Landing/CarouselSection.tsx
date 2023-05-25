import React from "react";
import { testCardData } from "../../constants/testData";
import TravelCard from "../../components/TravelCard";
import useCarousel from "../../hooks/useCarousel";

const CarouselSection: React.FC = () => {
  const {
    carouselIndex,
    noTransition,
    copiedArr,
    handlePrevSlide,
    handleNextSlide,
    handleIndicatorClick,
  } = useCarousel(testCardData);

  return (
    <div className="w-full relative overflow-hidden">
      <div
        className="relative flex transform"
        style={{
          transform: `translateX(-${carouselIndex * 100}%)`,
          transition: noTransition ? "none" : "transform 500ms ease-in-out",
        }}
      >
        {copiedArr.map((card, index) => (
          <TravelCard key={index} card={card} />
        ))}
      </div>
      <div className="flex w-full justify-between">
        <button onClick={handlePrevSlide}>Prev</button>
        <div className="flex justify-center items-center space-x-2 mt-4">
          {testCardData.map((_, index) => (
            <div
              onClick={() => handleIndicatorClick(index)}
              key={index}
              className={`w-10 h-4 rounded-full cursor-pointer ${
                carouselIndex === index + 1 ? "bg-blue-500" : "bg-white"
              }`}
            />
          ))}
        </div>
        <button onClick={handleNextSlide}>Next</button>
      </div>
    </div>
  );
};

export default CarouselSection;
