import { useContext, useEffect } from "react";
import { UserContext } from "../../providers/UserContext";
import { Outlet, useNavigate } from "react-router-dom";

export const ProtectedRoutes = () => {
  const { user } = useContext(UserContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) {
      navigate("/");
    }
  }, [user, navigate]);
  return <div>{user ? <Outlet /> : null}</div>;
};
