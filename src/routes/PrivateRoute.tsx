import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useStore } from "../store/StoreContext";
import { RoutesConst } from "../constants/routes";

const PrivateRoute: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const { isAuthenticated } = useStore().authStore;

  return isAuthenticated ? (
    <>{children}</>
  ) : (
    <Navigate to={RoutesConst.LOGIN} />
  );
};

export default PrivateRoute;
