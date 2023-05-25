import React from "react";

interface CardData {
  title: string;
  content: string;
  tags: string[];
  author: string;
  thumbnail: string;
}

interface TravelCardProps {
  card: CardData;
}

const TravelCard: React.FC<TravelCardProps> = ({ card }) => {
  const { title, content, tags, author, thumbnail } = card;

  const handleTagClick = (tag: any) => {
    console.log("tag clicked");
  };

  return (
    <div className="w-full px-4 py-4 rounded-lg flex-shrink-0 flex">
      <img
        src={thumbnail}
        alt=""
        className="w-full h-80 object-center mb-2 mr-4 rounded-lg"
      />
      <div className="flex flex-col items-center justify-center">
        <h2 className="text-xl font-semibold mb-2">{title}</h2>
        <h3 className="text-lg truncate-2-lines mb-2">{content}</h3>
        <div className="w-full">
          {tags.map((tag, index) => (
            <span
              key={index}
              className="text-blue-500 cursor-pointer mr-2"
              onClick={() => handleTagClick(tag)}
            >
              #{tag}
            </span>
          ))}
        </div>
        <h3 className="text-right w-full">{author}</h3>
      </div>
    </div>
  );
};
export default TravelCard;
