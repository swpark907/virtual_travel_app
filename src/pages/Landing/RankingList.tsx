import React from "react";

interface RankingListProps {
  setIsRankingVisible: (visible: boolean) => void;
  testData: string[];
  isRankingVisible: boolean;
}

const RankingList: React.FC<RankingListProps> = ({
  setIsRankingVisible,
  testData,
  isRankingVisible,
}) => {
  return (
    <ul
      className={`${
        isRankingVisible ? "block" : "hidden"
      } absolute top-10 w-full px-2 rounded-md py-2 shadow-custom-light`}
      onMouseEnter={() => {
        setIsRankingVisible(true);
      }}
      onMouseLeave={() => {
        setIsRankingVisible(false);
      }}
    >
      {testData.map((term, index) => (
        <li className="flex py-2 hover:bg-slate-200 px-2 rounded-md cursor-pointer">
          <p className="w-full text-l text-gray-700 mr-2 min-w-max">
            {index + 1}위
          </p>
          <p className="w-full text-gray-600 text-right">{term}</p>
        </li>
      ))}
    </ul>
  );
};
export default RankingList;
