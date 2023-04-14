import { Route, Routes } from "react-router-dom";
import { LoginPage } from "../pages/LoginPage";
import { RegisterPage } from "../pages/RegisterPege";
import { HomePage } from "../pages/HomePage";
import { PublicRoutes } from "../pages/PublicRoutes";
import { ProtectedRoutes } from "../pages/ProtectedRoutes";

export const AppRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<PublicRoutes />}>
          <Route index element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
        </Route>

        <Route path="/home" element={<ProtectedRoutes />}>
          <Route index element={<HomePage />} />
        </Route>
      </Routes>
    </div>
  );
};
