import React from "react";
import { LandingPageData } from "../../constants";

const TitleSection: React.FC = () => {
  const {
    heroSection: { mainTitle, subTitle, hashtags },
  } = LandingPageData;
  return (
    <div className="mx-auto max-w-screen-xl px-20 text-right w-full">
      <h1 className="text-5xl font-semibold mb-2">{mainTitle}</h1>
      <h2 className="text-2xl mb-2">{subTitle}</h2>
      <h3 className="text-lg">{hashtags}</h3>
    </div>
  );
};
export default TitleSection;
