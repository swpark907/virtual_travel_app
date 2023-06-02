import React from "react";
import LoginForm from "./LoginForm";
import SocialLoginSection from "./SocialLoginSection";

interface LoginPageProps {}

const LoginPage: React.FC<LoginPageProps> = ({}) => {
  return (
    <div className="mx-auto w-1/3 py-20">
      <LoginForm />
      <SocialLoginSection />
    </div>
  );
};
export default LoginPage;
