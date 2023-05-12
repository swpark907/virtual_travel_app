import { Route, Routes } from "react-router-dom";
import "./index.css";
import PublicRoute from "./routes/PublicRoute";
import { RoutesConst } from "./constants/routes";
import PrivateRoute from "./routes/PrivateRoute";
import { Navbar } from "./components/Navbar";
import { Landing } from "./pages/Landing";
import { Dashboard } from "./pages/Dashboard";
import { LoginPage } from "./pages/LoginPage";

const App: React.FC = () => {
  return (
    <>
      <Navbar />
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
    </>
  );
};

export default App;
