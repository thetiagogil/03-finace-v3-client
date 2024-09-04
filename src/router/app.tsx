import { useContext } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { AuthContext } from "../contexts/auth.context";
import { ActivityPage } from "../pages/activity.page";
import { HomePage } from "../pages/home.page";
import { LoginPage } from "../pages/login.page";
import { SignupPage } from "../pages/signup.page";

export const App = () => {
  const { isAuthenticated, hasData } = useContext(AuthContext);
  return (
    <>
      {!isAuthenticated ? (
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      ) : hasData ? (
        <Routes>
          <Route path="/activity" element={<ActivityPage />} />
          <Route path="*" element={<Navigate to="/activity" />} />
        </Routes>
      ) : (
        <Routes>
          <Route path="/activity" element={<ActivityPage />} />
          <Route path="*" element={<Navigate to="/activity" />} />
        </Routes>
      )}
    </>
  );
};
