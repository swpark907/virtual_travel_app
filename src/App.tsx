import { Route, Routes } from "react-router-dom";
import "./index.css";
import PublicRoute from "./routes/PublicRoute";
import { RoutesConst } from "./constants";
import PrivateRoute from "./routes/PrivateRoute";
import { Navbar } from "./components";
import { Landing } from "./pages/Landing";
import { Dashboard } from "./pages/Dashboard";
import { LoginPage } from "./pages/LoginPage";
import { SignUpPage } from "./pages/SignUpPage";
import Map from "./pages/Map/Map";

const App: React.FC = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="map" element={<Map />} />
        <Route
          path={RoutesConst.LOGIN}
          element={
            <PublicRoute>
              <LoginPage />
            </PublicRoute>
          }
        />

        <Route
          path={RoutesConst.SIGNUP}
          element={
            <PublicRoute>
              <SignUpPage />
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
