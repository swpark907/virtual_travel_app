import React from "react";
import { useStore } from "../../store/StoreContext";
import { useNavigate } from "react-router-dom";
import { RoutesConst } from "../../constants";

const NavbarAuth: React.FC = () => {
  const { authStore } = useStore();
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate(RoutesConst.LOGIN);
  };

  const handleSignUp = () => {
    navigate(RoutesConst.SIGNUP);
  };

  return authStore.isAuthenticated ? (
    <div className="">{`${authStore.user}님 환영합니다!`}</div>
  ) : (
    <div className="">
      <button
        className="rounded-full bg-themeColor px-4 py-2 mr-2 hover:bg-white hover:border-themeColor border-2"
        onClick={handleLogin}
      >
        로그인
      </button>
      <button
        className="rounded-full bg-themeColor px-4 py-2 hover:bg-white hover:border-themeColor border-2"
        onClick={handleSignUp}
      >
        회원가입
      </button>
    </div>
  );
};
export default NavbarAuth;
