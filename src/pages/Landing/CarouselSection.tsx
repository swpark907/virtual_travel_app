import React, { useEffect, useState } from "react";
import { testCardData } from "../../constants/testData";
import TravelCard from "../../components/TravelCard";

const CarouselSection: React.FC = () => {
  const [carouselIndex, setCarouselIndex] = useState<number>(0);

  useEffect(() => {
    const slideInterval = setInterval(() => {
      handleNextSlide();
    }, 5000);

    return () => {
      clearInterval(slideInterval);
    };
  }, [carouselIndex]);

  const handlePrevSlide = () => {
    carouselIndex <= 0
      ? setCarouselIndex(testCardData.length - 1)
      : setCarouselIndex(carouselIndex - 1);
  };

  const handleNextSlide = () => {
    carouselIndex >= testCardData.length - 1
      ? setCarouselIndex(0)
      : setCarouselIndex(carouselIndex + 1);
  };

  const handleIndicatorClick = (index: number) => {
    setCarouselIndex(index);
  };

  return (
    <div className="w-full relative overflow-hidden">
      <div
        className="relative flex transform transition-transform duration-500 ease-in-out"
        style={{
          transform: `translateX(-${carouselIndex * 100}%)`,
        }}
      >
        {testCardData.map((card) => (
          <TravelCard card={card} />
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
                carouselIndex === index ? "bg-blue-500" : "bg-white"
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
