import React from "react";

const SocialLoginSection: React.FC = () => {
  return (
    <div className="flex flex-col mx-auto w-full">
      <button
        className="border border-slate-300 rounded-md mb-4 px-4 py-2"
        id="facebook-login"
      >
        facebook 로그인
      </button>
      <button
        className="border border-slate-300 rounded-md mb-4 px-4 py-2"
        id="naver-login"
      >
        naver 로그인
      </button>
      <button
        className="border border-slate-300 rounded-md mb-4 px-4 py-2"
        id="google-login"
      >
        구글 로그인
      </button>
      <button
        className="border border-slate-300 rounded-md px-4 py-2"
        id="kakao-login"
      >
        카카오 로그인
      </button>
    </div>
  );
};
export default SocialLoginSection;
