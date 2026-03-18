import { Navigate, Outlet } from "react-router-dom";

export default function ProtectedRoute() {
  // Write auth logic for seeing if user is authenticated
  const isUserAuthenticated = true;
  return (
    <div>
      Protected Route
      {isUserAuthenticated ? <Outlet /> : <Navigate to="/login" />}
    </div>
  );
}
