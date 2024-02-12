import { Navigate, Outlet } from "react-router-dom";

export default function ProtectedRoute({ isLogged }: any) {
    if(!isLogged) return <Navigate to="/login" />;
    return <Outlet />;
}