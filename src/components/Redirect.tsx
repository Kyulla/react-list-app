import { Navigate } from "react-router-dom";

export default function Redirect() {
    return <Navigate to="/404" replace />;
}