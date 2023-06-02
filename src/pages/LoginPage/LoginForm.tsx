import React from "react";

const LoginForm: React.FC = () => {
  return (
    <div className="mx-auto w-full flex justify-center flex-col items-center mb-10">
      <h1 className="mb-4 w-full text-center text-xl">로그인</h1>
      <form className="flex flex-col w-full">
        <input
          className="p-2 mb-2 border border-slate-400 rounded-md"
          type="text"
          placeholder="이메일 주소"
        />
        <input
          className="p-2 border border-slate-400 rounded-md mb-4"
          type="text"
          placeholder="비밀번호"
        />
        <button className="border-themeColor border bg-themeColor text-white py-2 px-4 rounded-md hover:bg-white hover:text-themeColor">
          로그인
        </button>
      </form>
    </div>
  );
};
export default LoginForm;
