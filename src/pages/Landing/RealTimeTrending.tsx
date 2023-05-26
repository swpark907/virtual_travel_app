import React, { useState } from "react";
import useCarousel from "../../hooks/useCarousel";
import SearchTermItem from "./SearchTermItem";
import RankingList from "./RankingList";

const testData = [
  "Search Term 1",
  "Search Term 2",
  "Search Term 3",
  "Search Term 4",
  "Search Term 5",
  "Search Term 6",
  "Search Term 7",
  // "Search Term 8",
  // "Search Term 9",
  // "Search Term 10",
];

const RealTimeTrending: React.FC = () => {
  const { carouselIndex, handleNextSlide, noTransition, copiedArr } =
    useCarousel(testData);

  const [isRankingVisible, setIsRankingVisible] = useState<boolean>(false);

  React.useEffect(() => {
    const slideInterval = setInterval(() => {
      handleNextSlide();
    }, 2000);
    return () => clearInterval(slideInterval);
  }, [carouselIndex, handleNextSlide]);

  return (
    <div className="w-full relative flex h-10 px-4">
      <h1 className="z-10 py-2 w-full text-center font-bold">
        실시간 인기 검색어 순위
      </h1>
      <div className="relative w-full">
        <SearchTermItem
          setIsRankingVisible={setIsRankingVisible}
          copiedArr={copiedArr}
          noTransition={noTransition}
          carouselIndex={carouselIndex}
          testData={testData}
        />
        <RankingList
          setIsRankingVisible={setIsRankingVisible}
          testData={testData}
          isRankingVisible={isRankingVisible}
        />
      </div>
    </div>
  );
};

export default RealTimeTrending;
