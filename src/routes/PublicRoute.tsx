import React from "react";
import { Navigate, Outlet, Route } from "react-router-dom";
import { useStore } from "../store/StoreContext";
import { RoutesConst } from "../constants";

const PublicRoute: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { isAuthenticated } = useStore().authStore;

  return isAuthenticated ? <Navigate to={RoutesConst.HOME} /> : <>{children}</>;
};

export default PublicRoute;
