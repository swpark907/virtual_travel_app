import React from "react";

interface SearchTermItemProps {
  setIsRankingVisible: (visible: boolean) => void;
  copiedArr: string[];
  noTransition: boolean;
  carouselIndex: number;
  testData: string[];
}

const SearchTermItem: React.FC<SearchTermItemProps> = ({
  setIsRankingVisible,
  copiedArr,
  noTransition,
  carouselIndex,
  testData,
}) => {
  return (
    <section
      className="flex flex-col transform transition-transform duration-500 ease-in-out w-full h-full overflow-hidden px-2"
      onMouseEnter={() => {
        setIsRankingVisible(true);
      }}
      onMouseLeave={() => {
        setIsRankingVisible(false);
      }}
    >
      <ul
        className="w-full"
        style={{
          transform: `translateY(-${
            (carouselIndex * 100) / copiedArr.length
          }%)`,
          transition: noTransition ? "none" : "transform 500ms ease-in-out",
        }}
      >
        {copiedArr.map((term, index) => (
          <li className="flex items-center h-10" key={index}>
            <p className="w-full text-l font-bold text-gray-700 mr-2 min-w-max">
              {index === testData.length + 1 ? 1 : index}위
            </p>
            <p className="w-full text-gray-600 text-right">{term}</p>
          </li>
        ))}
      </ul>
    </section>
  );
};
export default SearchTermItem;
