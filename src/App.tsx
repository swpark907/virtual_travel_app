import { Route, Routes } from "react-router-dom";
import "./index.css";
import PublicRoute from "./routes/PublicRoute";
import Landing from "./pages/Landing";
import { RoutesConst } from "./constants/routes";
import Dashboard from "./pages/Dashboard";
import LoginPage from "./pages/LoginPage";
import PrivateRoute from "./routes/PrivateRoute";

const App: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route
        path={RoutesConst.LOGIN}
        element={
          <PublicRoute>
            <LoginPage />
          </PublicRoute>
        }
      />

      <Route
        path={RoutesConst.DASHBOARD}
        element={
          <PrivateRoute>
            <Dashboard />
          </PrivateRoute>
        }
      />
    </Routes>
  );
};

export default App;
