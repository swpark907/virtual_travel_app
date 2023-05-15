import { useEffect } from "react";
import { useRoutes, useNavigate } from "react-router-dom";

const Map: React.FC = () => {
  const navigate = useNavigate();

  useEffect(() => {
    navigate("/map/interactive", { replace: true });
  }, []);

  return null;
};

export default Map;
